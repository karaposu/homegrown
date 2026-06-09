---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Articulate_simple Process-Layer Design

## Question

From `devdocs/inquiries/2026-06-07_15-00__articulate_simple_process_layer_design/_branch.md`:

**Subject:** the **process layer** of `articulate_simple` — the discipline whose meaning layer is articulated in `devdocs/how_articulate_simple_should_be.md` and whose structural layer was redesigned at the `2026-06-07_13-30__articulate_simple_doc_structural_redesign` inquiry. The meaning layer is settled by the four cascade-resolution inquiries (the `2026-06-06_21-52` MQ-2-shape resolution; the `2026-06-06_23-18` MultiDepth purpose-wrapped resolution; the `2026-06-07_11-40` Rephrase constraint-source resolution; the `2026-06-07_12-22` §9 two-pass-deferral resolution). The structural layer is settled by `2026-06-07_13-30`. The process layer — HOW the discipline RUNS at invocation time — has been deliberately deferred: the meaning-layer doc's §9 ("Pre-context phase boundary") commits process-layer concerns as living "in runner-side specs, one per runner," and the doc's §6 ("The lightweight stance") commits "Cross-LLM determinism on judgment-call edges... is intentionally not committed at runtime — the lightweight stance authorizes LLM-judgment divergence at these edges by design." The combined deferral leaves a real gap: per-stage runtime procedures, gate-firing rules, detection mechanisms for the LLM-judgment edges, the self-assessment runtime check, late-split re-fire triggers, the spawn-or-process decision, bundle assembly mechanics, and the interfaces with neighbors (the `/surfacing` discipline + the runner + the downstream loop disciplines) are not specified anywhere.

**Action:** design — produce a process-layer specification that articulates the runtime procedure without over-specifying the LLM-judgment edges the meaning-layer doc deliberately leaves open.

**Level:** discipline-runtime level (how each of the 5 operations runs at invocation time; how the stages compose; how gates fire; how the bundle gets assembled and emitted; how recovery works).

**Deliverable shape:** a process-layer specification + decisions on (a) where the spec lives (artifact-shape), (b) per-stage runtime procedures, (c) how LLM-judgment edges are honored without over-specification, (d) gate-firing rules, (e) recovery/re-fire mechanisms, (f) bundle assembly, (g) interfaces with neighbors, (h) explicit named cascading implications.

**Goal:** A confident process-layer specification that preserves all settled meaning-layer commitments + 13-30 structural-layer redesign + respects the doc's §6 lightweight stance constraint (no runtime enforcement code) + respects the doc's §9 OUT-OF-SCOPE commitment (process-layer doesn't live in meaning-layer doc) + specifies the runtime procedure for each of the 5 operations + MQA + gate-firing rules + recovery mechanisms + self-assessment runtime + bundle assembly + interfaces + decides where the spec LIVES + names any cascading implications honestly per the cascade-acknowledgment-at-cumulative-pressure pattern from the `2026-06-07_12-22` finding.

## Finding Summary

- **Verdict (the answer).** Create a new sibling discipline-explainer-discipline spec document at `devdocs/how_articulate_simple_process_should_be.md`. The new doc articulates the process layer of `articulate_simple` (how the discipline RUNS at invocation time) as a complement to the existing meaning-layer doc at `devdocs/how_articulate_simple_should_be.md` (which articulates what the discipline IS at the cognitive-operation level). Style is hybrid: deterministic gates (stage entry/exit + end-of-invocation) are imperative (control flow); LLM-judgment edges are declarative (procedure description, not enforcement code). Organization is 13 sections covering identity + foundational constraints + 4-stage runtime overview + per-stage procedure + deterministic gates + LLM-judgment edges + LAYER 1 mode self-check + confidence assignment + bundle assembly + interfaces with neighbors + recovery mechanisms + relationship to meaning-layer doc and runner-side specs + inheritance map.

- **Where the spec lives (artifact-shape decision).** The new sibling doc at `devdocs/how_articulate_simple_process_should_be.md`. Three alternatives were rejected on structural grounds: appending to the meaning-layer doc would violate the meaning-layer doc's §9 "Pre-context phase boundary" commitment that routes process-layer concerns out; sub-dividing into multiple sub-specs would over-fragment the reader's path; embedding process notes only in runner-side specs would leave each runner-author to re-derive the discipline-level skeleton from the meaning-layer doc plus 11 prior findings (costly and inconsistent across runners). The new sibling doc is COMPLEMENTARY to runner-side specs, not competing — it gives runners the SKELETON; runner-side specs flesh out per-runner implementation choices per the meaning-layer doc's §9 routing.

- **7 LLM-judgment edges named, each gets a declarative procedure paragraph.** The meaning-layer doc's §6 explicitly names three judgment-call edges (cold-context detection; intrinsic-vs-extrinsic exclusion-ambiguity routing; MQA reconcile-vs-surface threshold) plus "and similar LLM-judgment points." The four cascade refinements added four more: 2-shape determination (identified-ambiguities-list vs explicit-empty per the `2026-06-06_21-52` and `2026-06-06_23-18` resolutions); AMBIGUITY-NATURE operationalization (WHY vs WHAT axis per `2026-06-06_23-18`); multi-source composition runtime enforcement for Rephrase (per `2026-06-07_11-40`); realistic variant count determination (typical 2-6 per `2026-06-07_11-40`). Total: 7 edges. Each gets a declarative procedure paragraph in the new spec — not a checker, not an enforcement step, just a description of what the LLM does at the edge under §6's authorized LLM-judgment latitude.

- **9 LAYER 1 modes total for end-of-invocation self-check; one of the three "cascade-era" additions was re-framed rather than newly introduced.** The original process-layer finding at `2026-06-04_07-48` established the LAYER 1 framework (operational failure modes detectable per invocation) and named 4 modes; the `2026-06-04_14-14` finding added a fifth ("MQ2 answer missing preparation content"); the meaning-layer doc's §7 added a sixth ("MQ2 identified-ambiguities-list missing kinds-axis or stance-axis"). The cascade refinements add three more failure signatures: 2-shape violation (a commitment emitted instead of identified-ambiguities at any MQ or MultiDepth); AMBIGUITY-NATURE conflation (a WHY-axis ambiguity identified at MQ3 OR a WHAT-axis ambiguity identified at MultiDepth); and "Rephrase variant-set drifts outside multi-source composition bounds." The third was already named in the meaning-layer doc's §7 (originated from the `2026-06-07_11-40` cascade refinement) — so among the "three cascade-era additions," two are genuinely new and one is a re-framing at cascade level of an already-present mode. Total: 9 modes, each gets a binary fire/not-fire LLM-judgment per mode at end-of-invocation in a single light pass.

- **Asymmetric-failure principle elevated from 2-shape-specific to a META-RULE at LLM-judgment edges, with per-edge direction articulated.** The `2026-06-06_21-52` cascade finding named asymmetric-failure for 2-shape determination (bias toward identified-ambiguities under uncertainty: over-emission is recoverable, under-emission silently drops information). The `2026-06-07_11-40` cascade used asymmetric-failure for Rephrase keep-together. The `2026-06-06_23-18` cascade used asymmetric-failure for MultiDepth perceivability. Cumulative use across three cascade findings + foundational use grounds elevation from 2-shape-specific to meta-rule. The new spec articulates the asymmetric-failure direction PER edge: for 2-shape, prefer identified-ambiguities; for Itemize (the first stage), prefer keep-together (the meaning-layer doc's §2.1 constraint); for the LAYER 1 self-check, prefer FLAG when uncertain about mode-fire; for multi-source composition, prefer over-bounding; for variant count, prefer the floor+; for the MQA reconcile-vs-surface threshold, prefer surface over forced reconcile when overlap is unclear; for cold-context detection, prefer cold-context treatment under uncertainty.

- **The original process-layer finding `2026-06-04_07-48` STANDS as foundation; cascade-era refinements EXTEND.** Three commitments STAND verbatim: (i) the 3-phase runtime shape (statement-level Itemize, per-item operations, end-of-invocation self-assessment); (ii) the LAYER 1 / LAYER 2 framework (operational per-invocation modes vs behavioral audit-over-time modes); (iii) the per-operation firing-format for Itemize + Meta-question + MQA + Deconstruct + MultiDepth. Two commitments STAND-AND-EXTEND: the per-operation firing-format for Rephrase now includes multi-source composition (per `2026-06-07_11-40`); the LAYER 1 mode set adds two genuinely new cascade-era signatures (2-shape violation; AMBIGUITY-NATURE conflation) and re-frames a third (multi-source composition drift; already in meaning-layer doc §7). The new spec doc explicitly distinguishes STANDS-verbatim from STANDS-and-extends in its inheritance map section.

- **Cumulative cascade pressure named honestly: 6 touches across 4 touch types.** Per the cascade-acknowledgment-at-cumulative-pressure pattern from the `2026-06-07_12-22` finding, the process layer of `articulate_simple` has now been touched 6 times across 4 distinct touch types: 1 foundational touch (the `2026-06-04_07-48` process-layer finding); 4 cascade refinement touches (the `2026-06-06_21-52` MQ-2-shape resolution; the `2026-06-06_23-18` MultiDepth purpose-wrapped resolution; the `2026-06-07_11-40` Rephrase constraint-source resolution; the `2026-06-07_12-22` §9 two-pass-deferral resolution); 1 structural redesign touch (the `2026-06-07_13-30` structural-layer redesign); and 1 process-layer extraction touch (this inquiry). The touch-type distinction is load-bearing: foundational touch sets the framework, cascade touches refine specific operations' essence, structural touch reorganizes the meaning-layer doc, process touch extracts the process-layer spec from the cumulative state. Honest acknowledgment + touch-type distinction = compliance with the `2026-06-07_12-22` cascade-acknowledgment pattern.

- **New meta-pattern candidates (sample-size 1 or 2; DEFERRED-revival) and Research Frontiers.** Three candidate meta-patterns surfaced (each at sample-size 1 or 2, each preserved as DEFERRED-revival with an explicit ≥3-instance revival trigger): hybrid-declarative-imperative-process-spec (the style commitment in this finding generalized to discipline-explainer-discipline process specs in general); layered-IA-for-spec-docs at sample-size 2 (the `2026-06-07_13-30` finding introduced the pattern at sample-size 1 for meaning-layer doc structural redesign; this inquiry applies it PARTIAL to a process-layer spec doc — second sample point); discipline-level-process-skeleton-as-runner-spec-foundation (the assembly emergent that names how a discipline-level process spec relates to per-runner specs; sample-size 1). Two outputs are RESEARCH FRONTIER: the broader pattern of "process-layer-design for discipline-explainer-disciplines in general" (out of this inquiry's Layer Commitment scope — bounded to `articulate_simple`); and a "cross-cutting shared-vocab document" for multi-runner ecosystems (speculative; depends on multi-runner ecosystem emerging).

## Finding

### Context — why the process layer matters now

The `articulate_simple` discipline has, since the `2026-06-04_07-48` process-layer finding (the "foundational process-layer finding"), had a runtime shape — three phases (statement-level Itemize, per-item operations, end-of-invocation self-assessment), per-operation firing-format, and a two-tier failure-mode framework (LAYER 1 modes detectable within a single invocation; LAYER 2 modes detectable only over time via corpus-pass audit). That foundational shape has been preserved through everything that followed.

What followed was four cascade refinements that resolved meaning-layer ambiguities about specific operations:

- `2026-06-06_21-52` resolved the meta-question (MQ) 2-shape answer range — every MQ emits either an identified-ambiguities-list or an explicit-empty (not a commitment).
- `2026-06-06_23-18` resolved MultiDepth's output to "literal-statement + identified-purpose-motivation-ambiguities" and named the AMBIGUITY-NATURE distinction (MQ3 covers WHAT-axis ambiguities, MultiDepth covers WHY-axis ambiguities).
- `2026-06-07_11-40` resolved Rephrase as multi-source composition (Deconstruct deliverable-shape + identified-ambiguities-list + MQ4 NOT-list + substrate-bounded) producing a variant-set that preserves openness rather than committing to a single rephrasing.
- `2026-06-07_12-22` resolved §9 of the meaning-layer doc to a "pre-context phase boundary" framing and named the cascade-acknowledgment-at-cumulative-pressure pattern.

Then the `2026-06-07_13-30` structural-layer redesign re-organized the meaning-layer doc itself (table of contents, section ordering, the inline early example, the inheritance map's sub-headers and commitment-name index, and the §9 title refresh).

After all that, the meaning layer is settled, and the structural layer is settled, but the process layer has only been touched once (by the `2026-06-04_07-48` foundational finding). The cascade refinements have implications for how the discipline RUNS — they add new LLM-judgment edges, they extend the LAYER 1 mode set, they refine Rephrase's runtime composition — but those implications haven't been articulated together anywhere. The meaning-layer doc's §9 says process-layer concerns "live in runner-side specs, one per runner" — but the discipline-level skeleton those runner-side specs would inherit doesn't exist either. So each runner-author would have to re-derive that skeleton from the meaning-layer doc plus 11 prior findings — costly, error-prone, and likely to produce inconsistent runner specs across runners.

This finding produces that missing discipline-level skeleton.

### The verdict — a new sibling doc

Create a new file at `devdocs/how_articulate_simple_process_should_be.md`. It is a sibling to the meaning-layer doc at `devdocs/how_articulate_simple_should_be.md`. The two docs together describe `articulate_simple`: meaning-layer says what the discipline IS; process-layer says how it RUNS.

The new doc has 13 sections. Each section addresses one of the 9 process-layer dimensions surfaced during this inquiry's Surfacing discipline, plus 3 supporting sections (identity / foundational constraints / inheritance map) and 1 boundary-clarification section (relationship to meaning-layer doc and runner-side specs). The 13 sections in their natural order:

1. **Identity / Purpose / Scope.** This doc IS the process-layer specification for `articulate_simple`. It complements the meaning-layer doc. It respects the meaning-layer doc's §6 (no runtime enforcement code) and §9 (process-layer routed out of the meaning-layer doc). Its scope is DISCIPLINE-LEVEL — the skeleton that runner-side specs inherit. Per-runner mechanism choices are out of scope here.

2. **Foundational constraints.** §6 lightweight stance HARD constraint named and the six §6 criteria preserved. §9 OUT-OF-SCOPE commitment named (process-layer routed out; runner-side specs hold per-runner mechanism). Inheritance from the `2026-06-04_07-48` foundational process-layer finding: the 3-phase runtime, the per-operation firing-format for non-Rephrase operations, and the LAYER 1 / LAYER 2 framework all PRESERVED VERBATIM. Asymmetric-failure principle elevated to META-RULE at LLM-judgment edges, with per-edge directions articulated in the LLM-judgment-edges section below. Meaning-layer doc's §1 NOT-list rule 3 ("No adjudication") preserved at process layer: the discipline emits options; the runtime does NOT decide which option is correct.

3. **Runtime stages overview.** Four stages compose acyclically within an invocation — no in-invocation iteration. Stage 1 (Itemize) is statement-level and fires once. Stages 2-4 fire per item N times where N is the Itemize count. Stage 2 is Meta-question plus MQA; Stage 3 is Deconstruct plus MultiDepth (independent operations within the stage; either order); Stage 4 is Rephrase.

4. **Per-stage runtime procedure.** Sub-sections for each of the 5 operations + MQA. Each sub-section names the operation's inputs (what it reads), runtime procedure (what it does — declarative for LLM-judgment edges, imperative for deterministic gates), outputs (what it emits to bundle state), and where LLM-judgment fires within the operation. For Rephrase, the runtime procedure explicitly notes the multi-source composition (per the `2026-06-07_11-40` cascade refinement): Rephrase reads Deconstruct's deliverable-shape + identified-ambiguities-list (from MQ2 + MQ3 + MultiDepth, post-MQA reconciliation) + MQ4's NOT-list + substrate (warm context if present); the LLM generates variants spanning the identified ambiguity dimensions, applying asymmetric-failure bias (prefer more variants over fewer to preserve openness); each variant is judged at generation time against the four composition bounds.

5. **Deterministic gates.** Stage entry / stage exit gates + end-of-invocation gate. Stage 1 entry: invocation starts; statement received. Stage 1 exit: Itemize emitted; per-item iteration begins. Stage 2 entry: per-item; item text received. Stage 2 exit: MQA emitted; raw MQ identifications + reconciliation-content available. Stage 3 entry: post-Stage 2; same item. Stage 3 exit: Deconstruct + MultiDepth both emitted. Stage 4 entry: post-Stage 3; same item. Stage 4 exit: Rephrase variant-set emitted; item bundle complete. End-of-invocation gate: all items processed; bundle assembly complete; self-assessment runs. These gates are IMPERATIVE — they describe control flow, not LLM-judgment.

6. **LLM-judgment edges (7).** Each edge gets one declarative procedure paragraph (per the meaning-layer doc's §6 criterion 4 — no sub-machinery beyond a paragraph per operation; the same constraint applies per edge). The 7 edges with their asymmetric-failure directions: **(1) Cold-context detection** — LLM examines loaded context for relevance signals to this task's domain; asymmetric-failure direction: prefer cold-context treatment under uncertainty. **(2) Intrinsic-vs-extrinsic exclusion-ambiguity routing** — per signal, LLM determines source (in-statement vs broader session); routes intrinsic signals to MQ3 + MQA, extrinsic to MQ4. **(3) MQA reconcile-vs-surface threshold** — MQA reads MQ identification-set; assesses overlap clarity; reconciles when joint axis identifiable with HIGH confidence; otherwise surfaces "irreducible overlap." Asymmetric-failure direction: prefer surface over forced reconcile when overlap unclear. **(4) 2-shape determination** — per typed axis, LLM perceives whether openness is plausible; if yes, identified-ambiguities-list; if no, explicit-empty. Asymmetric-failure direction: prefer identified-ambiguities (over-emission is recoverable; under-emission silently drops information). **(5) AMBIGUITY-NATURE operationalization** — MQ3 asks "what is the user trying to accomplish?" (action-endpoint shape); MultiDepth asks "why does the user want the task done?" (motivation-chain shape). Per cascade refinement `2026-06-06_23-18`. **(6) Multi-source composition runtime enforcement for Rephrase** — per variant, LLM judges against four composition bounds at generation time (per cascade refinement `2026-06-07_11-40`). Asymmetric-failure direction: prefer over-bounding (variant excluded under uncertainty is recoverable; variant included that drifts past bounds is harder to detect later). **(7) Variant count determination** — count emerges from how many ambiguity dimensions are perceived; typical 2-6 per `2026-06-07_11-40`. Floor is 2 per the meaning-layer doc's §2.5 commitment. Asymmetric-failure direction: prefer the floor+ side. First-use note: "LLM-judgment edge" is a paraphrase of the meaning-layer doc's "judgment-call edges" plus "LLM-judgment points" terminology — same concept, paraphrased for sectional readability.

7. **LAYER 1 mode self-check (9 modes).** Each mode gets a per-mode procedure paragraph: at end-of-invocation, the LLM scans the bundle for the mode's failure signature; binary fire / not-fire. The self-check is a single LIGHT pass — all 9 modes scanned in one LLM-judgment, not 9 separate sub-passes (the multi-pass version would violate the meaning-layer doc's §6 criterion 4). The 9 modes: **(1) Premature Itemize split** (foundational, per `2026-06-04_07-48`); **(2) Late-detected multi-item case** (foundational); **(3) MQ extension violates bounded-extensibility** (foundational); **(4) Per-operation firing missed — a required output field is absent** (foundational); **(5) MQ2 answer missing preparation content** (per `2026-06-04_14-14`); **(6) MQ2 identified-ambiguities-list missing kinds-axis or stance-axis** (in meaning-layer doc §7); **(7) [cascade-era — genuinely new] 2-shape violation — commitment emitted instead of identified-ambiguities at any MQ or MultiDepth** (per `2026-06-06_21-52` and `2026-06-06_23-18`); **(8) [cascade-era — genuinely new] AMBIGUITY-NATURE conflation — WHY-axis at MQ3 OR WHAT-axis at MultiDepth** (per `2026-06-06_23-18`); **(9) [cascade-era — re-framed from already-present meaning-layer doc §7 mode] Rephrase variant-set drifts outside multi-source composition bounds — originated in meaning-layer doc §7 from `2026-06-07_11-40`; re-confirmed and re-framed at cascade level**.

8. **Confidence assignment (HIGH / MED / LOW).** Preserved from `2026-06-04_17-46`: Primary discriminator (objective) is the count and proximity of LAYER 1 boundary approaches from the self-check (e.g., zero approaches → clean; one fired + close to another → boundary; structural failure → fail). Secondary discriminator (subjective) is the per-operation friction the LLM perceived during execution. Per-verdict pairings: HIGH-PROCEED (clean self-check, low friction); MED-FLAG (boundary approached + one fired); LOW-RE-RUN (structural failure); LOW-PROCEED (process succeeded with compound friction); HIGH-FLAG (very confident the flagged condition exists). Procedure: at end-of-invocation, LLM tallies Primary from self-check output, recalls Secondary friction signals, combines into HIGH/MED/LOW.

9. **Bundle assembly mechanics.** Per-item bundle contents: item text + MQ entries (each with Q-mandatory + 2-shape answer) + Deconstruct tuple + MultiDepth two outputs (literal-statement + identified-purpose-motivation-ambiguities) + Rephrasings (variant-set). Statement-level fields: Itemize count + per-item identifiers + self-assessment verdict + confidence. Assembly procedure (declarative): as each operation emits, its output integrates into the bundle's structure; at end-of-invocation, the bundle is serialized for emission. Field naming is structural-layer concern (per the meaning-layer doc §4); process-layer specifies WHICH fields exist, not exact names. Bundle integrity check at end-of-invocation: LAYER 1 mode 4 (per-operation firing missed) — if a required field is absent, mode 4 fires.

10. **Interfaces (runner + `/surfacing` + downstream loop disciplines).** Runner consumer pattern: reads Itemize count → makes spawn-or-process decision (count = 1 → process in place; count > 1 → runner spawns N sibling work items per meaning-layer doc §2.1); reads MQ2 + MQ4 (+ MQA reconciliation-content when applicable) → formulates `/surfacing` input (purpose + territory + bias per the `/surfacing` discipline's input contract); reads verdict + confidence → makes re-invocation decisions; reads identified-ambiguities-list → presents to user for verification. `/surfacing` interface: runner formulates `/surfacing` input post-bundle-emission; no in-`articulate_simple` machinery for `/surfacing` dispatch. Downstream loop disciplines (Sensemaking, Decomposition, Innovation, Critique) consume the bundle as inherited context: MQ4's identified-exclusion-ambiguities feed downstream territory specifications; the bundle's identified-ambiguities-list informs downstream problem framing. User consumer pattern: scannable framing artifact (per the meaning-layer doc §6 criterion 6 — every output element load-bearing). Patch-level refinements: (i) the confidence rubric must explicitly handle the "no LAYER 1 modes fired but high friction" case — maps to MED-FLAG per `2026-06-04_17-46` rubric's structural reading; (ii) the user verification pathway IS a discipline-level interface (the runner presents the identified-ambiguities-list to the user for verification; user accept / refine / re-run feeds back to runner); (iii) the "no-late-split detected" success signal is the ABSENCE of late-split triggers — when no signal from Deconstruct multi-tuple internal structure / MQ2 multi-axis ambiguity / user catch / downstream catch, the bundle is complete from a recovery-mechanism perspective.

11. **Recovery mechanisms (discipline-signal level).** Late-split signals enumerated: Deconstruct emits multi-tuple internal structure that Itemize didn't catch; MQ2 identifies context-need ambiguity at multi-axis (suggesting multi-item structure); user verification catches a missed split; a downstream discipline catches a missed split when consuming the bundle. The discipline-level spec describes THESE SIGNALS; the runner-side spec describes the DETECTION MECHANISMS (how the runner detects late-split) and the RE-INVOCATION PROCEDURES (how the runner re-fires the discipline) per the meaning-layer doc's §9 routing. Within `articulate_simple`, re-invocation modes are limited to late-split re-fire + statement-level re-fire (full re-invocation when self-assessment yields RE-RUN). No in-invocation iteration (per Section 3 above — 4-stage per-item flow is acyclic). The self-assessment's RE-RUN verdict triggers full re-invocation (runner choice; not partial). Two-pass-form re-invocation modes (e.g., a "context-informed-refinement" mode that re-runs only Rephrase with new substrate) are OUT OF SCOPE here — they belong to the deferred Cascade B "two-pass-as-discipline-identity" design (from the `2026-06-07_12-22` finding).

12. **Relationship boundary (meaning-layer doc + runner-side specs).** This process-layer doc is COMPLEMENTARY to the meaning-layer doc, not embedded in it — preserves the meaning-layer doc's §9 OUT-OF-SCOPE commitment. This process-layer doc is a SKELETON; runner-side specs FLESH OUT per-runner specifics — preserves the meaning-layer doc's §9 routing of process-layer concerns to "runner-side specs, one per runner." The discipline-level vs runner-level distinction is made explicit so future contributors don't conflate the two. A one-line "see also" reference should be added in the meaning-layer doc's §9 pointing to this new process-layer doc.

13. **Inheritance map.** Lists the 11 priors this finding inherits from, with one-line descriptions and STAND / STAND-AND-EXTEND verdicts. Sub-headers organize the map: "Foundational" (the `2026-06-04_07-48` process-layer finding; the `2026-06-04_14-14` mode 6 finding; the `2026-06-04_17-46` confidence rubric finding; the `2026-06-04_21-58` MQ2 dispatch finding; the `2026-06-06_18-21` three-layer model finding) and "Cascade-era refinements" (the four cascade-resolution findings 21-52 + 23-18 + 11-40 + 12-22; the `2026-06-07_13-30` structural redesign). The map references the meaning-layer doc as the foundation that the process-layer doc complements. Edge/mode extensibility is implicit from the `2026-06-04_07-48` framework's mode-set extension allowance — that allowance is referenced in the inheritance map's foundational sub-header rather than given a separate "extensibility note" section. A minimal calibration-state section (analogous to the meaning-layer doc's §10) captures the current touch state (6 touches across 4 touch types per the cumulative-cascade-pressure-acknowledgment section above).

### Why this verdict over alternatives

Four artifact-shape alternatives to "new sibling doc" were considered and rejected on structural grounds:

- **Append the process-layer content to the meaning-layer doc** would violate the meaning-layer doc's §9 "Pre-context phase boundary" commitment, which explicitly routes process-layer concerns out of the meaning-layer doc.
- **Sub-divide the process-layer content into multiple per-operation or per-mechanism sub-specs** would over-fragment the reader's path — readers needing to understand "how does `articulate_simple` run?" would consult 5 separate documents to assemble a unified view, sacrificing cross-operation interface clarity. One unified doc with sectioned per-operation content is the right granularity.
- **Embed process notes only in runner-side specs (one per runner)** would leave each runner-author to re-derive the discipline-level skeleton from the meaning-layer doc plus 11 prior findings every time a new runner is built. Costly, error-prone, and inconsistent. The meaning-layer doc's §9 routes RUNNER-side process to runner specs; it doesn't prohibit a discipline-level process skeleton. The two are complementary.
- **Inline the process-layer content in this finding only — no doc** would mean no persistent artifact for future runners to reference. Findings are revision-history; the process-layer skeleton is something runners need to consult repeatedly.

Two style alternatives to "hybrid declarative + imperative" were considered and rejected:

- **Pure-declarative** (describe what happens; no imperative steps) would lose deterministic specification at the stage entry/exit gates. Runners would have to reverse-engineer the control flow from the descriptions.
- **Pure-imperative** (a runbook of exact steps) would over-specify the LLM-judgment edges and violate the meaning-layer doc's §6 stance that "Cross-LLM determinism on judgment-call edges... is intentionally not committed at runtime — the lightweight stance authorizes LLM-judgment divergence at these edges by design." Pure-imperative would also produce pseudo-checker-code at the LLM-judgment edges.

Two inheritance alternatives to "04-07-48 STANDS-and-extends" were considered and rejected:

- **04-07-48 fully superseded** (re-derive process layer from scratch) would lose the 3-phase runtime + per-operation firing-format + LAYER 1/LAYER 2 framework, all of which are preserved in current state. Re-derivation would also lose the inheritance and re-test trail.
- **04-07-48 STANDS verbatim with no extension** would fail to integrate the cascade refinements' implications (multi-source composition for Rephrase; 2-shape per MQ; AMBIGUITY-NATURE per MQ3 / MultiDepth). The STANDS-and-extends framing preserves what stands AND honors what cascaded.

## Inherited Commitments Re-test

This inquiry's `_branch.md` declared a Synthesis Trigger across 11 priors plus the meaning-layer doc plus the structural-layer redesign finding. Per CONCLUDE protocol, each commitment is re-tested with cited evidence or flagged as carried-forward-without-re-test.

- **Commitment:** 3-phase runtime + per-operation firing-format + LAYER 1/LAYER 2 framework for `articulate_simple`.
  **Source:** `devdocs/inquiries/2026-06-04_07-48__task_define_process_layer/finding.md`.
  **Re-test status:** RE-TESTED.
  **Evidence:** The new spec's Section 3 (Runtime stages overview), Section 4 (Per-stage runtime procedure), and Section 7 (LAYER 1 mode self-check) preserve the 3-phase shape (statement-level + per-item + end-of-invocation) and the LAYER 1 framework. The Innovation discipline's Mechanism 3 Q1.5 Inversion tested the REPLACES alternative and KILLED it on structural grounds. STANDS.

- **Commitment:** LAYER 1 mode 6 ("MQ2 answer missing preparation content") detection rule.
  **Source:** `devdocs/inquiries/2026-06-04_14-14__task_define_mode6_detection_rule/finding.md`.
  **Re-test status:** RE-TESTED.
  **Evidence:** Mode 5 in the new spec's 9-mode set (Section 7 above) preserves the `2026-06-04_14-14` detection rule verbatim. STANDS.

- **Commitment:** HIGH/MED/LOW confidence rubric with Primary + Secondary discriminators.
  **Source:** `devdocs/inquiries/2026-06-04_17-46__task_define_confidence_rubric/finding.md`.
  **Re-test status:** RE-TESTED.
  **Evidence:** Section 8 (Confidence assignment) preserves Primary (objective count of LAYER 1 boundary approaches) + Secondary (subjective friction) discriminators and the per-verdict pairings (HIGH-PROCEED / MED-FLAG / LOW-RE-RUN / LOW-PROCEED / HIGH-FLAG). The Innovation Mechanism 5 Absence Recognition surfaced one patch-level refinement (the "no LAYER 1 fired but high friction" case is handled explicitly: maps to MED-FLAG). STANDS.

- **Commitment:** MQ2 dispatch + preparation substrate + always-invoke premise.
  **Source:** `devdocs/inquiries/2026-06-04_21-58__task_define_dispatch_vs_preparation_substrate/finding.md`.
  **Re-test status:** RE-TESTED.
  **Evidence:** Section 10 (Interfaces) preserves MQ2 + MQ4 as the runner-consumed fields for `/surfacing` input formulation. STANDS.

- **Commitment:** MQ 2-shape answer range (identified-ambiguities-list OR explicit-empty); substrate-bounded chain; cascade-acknowledgment-without-pre-decision pattern.
  **Source:** `devdocs/inquiries/2026-06-06_21-52__no_commitments_pre_surfacing_safety/finding.md`.
  **Re-test status:** RE-TESTED.
  **Evidence:** LLM-judgment edge 4 (2-shape determination, Section 6 above) operationalizes the 2-shape commitment at runtime with asymmetric-failure direction articulated. LAYER 1 mode 7 (2-shape violation, Section 7) detects violations of the 2-shape commitment at end-of-invocation. The cascade-acknowledgment-without-pre-decision pattern is preserved by deferring Cascade B (two-pass-as-discipline-identity) per the Open Questions section below. STANDS; extends process spec.

- **Commitment:** MultiDepth literal-statement + identified-purpose-motivation-ambiguities; AMBIGUITY-NATURE distinction (MQ3 WHAT-axis vs MultiDepth WHY-axis).
  **Source:** `devdocs/inquiries/2026-06-06_23-18__multidepth_purpose_wrapped_cascade_resolution/finding.md`.
  **Re-test status:** RE-TESTED.
  **Evidence:** LLM-judgment edge 5 (AMBIGUITY-NATURE operationalization, Section 6) operationalizes the WHY-vs-WHAT distinction at runtime. LAYER 1 mode 8 (AMBIGUITY-NATURE conflation, Section 7) detects axis-conflation at end-of-invocation. STANDS; extends process spec.

- **Commitment:** Rephrase multi-source composition (4 sources: Deconstruct deliverable-shape + identified-ambiguities-list + MQ4 NOT-list + substrate-bounded); variant-set as openness preservation; typical 2-6 variant count.
  **Source:** `devdocs/inquiries/2026-06-07_11-40__rephrase_constraint_source_cascade2_resolution/finding.md`.
  **Re-test status:** RE-TESTED.
  **Evidence:** LLM-judgment edge 6 (multi-source composition runtime enforcement) and edge 7 (variant count determination) at Section 6 above operationalize both commitments at runtime with asymmetric-failure directions. LAYER 1 mode 9 (Rephrase variant-set drifts outside multi-source composition bounds; Section 7 — re-framed from meaning-layer doc §7) detects composition drift at end-of-invocation. Section 4's Rephrase per-stage procedure explicitly names the 4 composition sources. STANDS; extends process spec.

- **Commitment:** Pre-context phase boundary (the meaning-layer doc's §9 refinement); scope-completeness-recasting-as-discipline-identity-preservation; cascade-acknowledgment-at-cumulative-pressure.
  **Source:** `devdocs/inquiries/2026-06-07_12-22__section9_two_pass_deferral_cascade3_resolution/finding.md`.
  **Re-test status:** RE-TESTED.
  **Evidence:** The artifact-shape decision (the new sibling doc at `devdocs/how_articulate_simple_process_should_be.md`) respects the meaning-layer doc's §9 commitment by living OUTSIDE the meaning-layer doc. The cumulative cascade pressure acknowledgment (the Finding Summary bullet on 6 touches across 4 touch types) honors the cascade-acknowledgment-at-cumulative-pressure pattern. Cascade B (two-pass-as-discipline-identity) is preserved as DEFERRED per cascade-acknowledgment-without-pre-decision. STANDS.

- **Commitment:** Three-layer ANCHOR / ENVELOPE / CORE model for runtime artifacts; empty-as-content principle.
  **Source:** `devdocs/inquiries/2026-06-06_18-21__articulate_simple_output_md_meaning/finding.md`.
  **Re-test status:** RE-TESTED.
  **Evidence:** The empty-as-content principle drives the 2-shape determination (LLM-judgment edge 4, Section 6). The three-layer ANCHOR / ENVELOPE / CORE model is APPLY-NO to the process spec doc (the model was for runtime artifacts; the process spec doc is an authoring-time artifact). The APPLY-NO verdict was already established in the `2026-06-07_13-30` structural-layer redesign finding; this inquiry preserves that pattern-scope. STANDS with pattern-scope preserved.

- **Commitment:** Structural-layer redesign of the meaning-layer doc (HYBRID-of-10-targeted-changes); layered-IA-for-spec-docs new meta-pattern (sample-size 1).
  **Source:** `devdocs/inquiries/2026-06-07_13-30__articulate_simple_doc_structural_redesign/finding.md`.
  **Re-test status:** RE-TESTED.
  **Evidence:** The meaning-layer doc's post-redesign structure is preserved by this inquiry (no meaning-layer or structural-layer changes to the meaning-layer doc). The layered-IA-for-spec-docs meta-pattern is applied APPLY-PARTIAL to the new process spec doc (TOC + sections + per-operation procedures + sub-section divides) — providing the second sample-size data point. The pattern remains DEFERRED-revival; promotion to ACTIONABLE waits for ≥3-instance writeups. STANDS; sample-size 2 transfer test now logged.

- **Commitment:** Meaning-layer doc's current state (post-13-30 redesign; 4 cascade rewrites; 996 lines; 13 sections + inline Example A).
  **Source:** `devdocs/how_articulate_simple_should_be.md`.
  **Re-test status:** RE-TESTED.
  **Evidence:** All meaning-layer commitments are preserved without modification by this inquiry. The new process-layer doc references the meaning-layer doc's §6, §9, §1 NOT-list, §2.1, §2.5, §4, §7, §10 by section number throughout. The one change to the meaning-layer doc that this finding proposes is a one-line "see also" reference in §9 pointing to the new process-layer doc — preserves §9's OUT-OF-SCOPE commitment for process-layer content while making the process-layer doc discoverable. STANDS as foundation.

## Next Actions

### MUST

(None. This finding does not require any action be taken — it produces a verdict on the process-layer design. The COULDs below realize the verdict but are not gating.)

### COULD

- **What:** Create the new file `devdocs/how_articulate_simple_process_should_be.md` with the 13 sections specified in the Finding section above. Apply the hybrid declarative + imperative style throughout. Respect the meaning-layer doc's §6 criterion 4 (concision per operation / per edge / per mode; descriptions, not enforcement code). Include the inheritance map's sub-headers (Foundational; Cascade-era refinements) and the minimal calibration-state section capturing the current 6 touches across 4 touch types.
  **Who:** discipline-author (a future inquiry or the user) writing to the new file path.
  **Gate:** observable — when a runner-author needs to implement `articulate_simple` consistently across multiple runners, OR when the next cascade refinement needs an integration target.
  **Why:** materializes the verdict; provides the discipline-level skeleton for runner-side specs; reduces re-derivation cost for future runner-authors; honors the meaning-layer doc's §9 routing of process-layer concerns to a complementary artifact.

- **What:** Add a one-line "see also" reference in the meaning-layer doc's §9 (`devdocs/how_articulate_simple_should_be.md` §9 "Pre-context phase boundary — and what's explicitly out of scope") pointing to `devdocs/how_articulate_simple_process_should_be.md`.
  **Who:** the editor of the meaning-layer doc.
  **Gate:** condition-bound — when the new process-layer doc is created.
  **Why:** makes the process-layer doc discoverable from the meaning-layer doc's process-layer-OUT-OF-SCOPE commitment without violating that commitment (the "see also" is a one-line pointer, not embedded process-layer content).
  **Depends-on:** the prior COULD ("Create the new file `devdocs/how_articulate_simple_process_should_be.md`"). This COULD is GATED — do not act until the prior COULD resolves.

- **What:** Validate the layered-IA-for-spec-docs pattern at sample-size 2 by observing how the new process-layer doc reads for the four reader types identified in the `2026-06-07_13-30` finding (fresh, returning, downstream-consumer, builder).
  **Who:** a future audit inquiry.
  **Gate:** observable — when 4 reader types have read the new doc and reported friction points.
  **Why:** advances the layered-IA-for-spec-docs pattern from sample-size 2 toward the ≥3-instance threshold for ACTIONABLE promotion.
  **Depends-on:** the first COULD ("Create the new file `devdocs/how_articulate_simple_process_should_be.md`"). This COULD is GATED — do not act until the first COULD resolves.

### DEFERRED

- **What:** Resolve Cascade B — two-pass-as-discipline-identity design (the question of whether `articulate_simple` should be paired with an `articulate2` discipline that runs after `/surfacing`, and what the two-pass form's process-layer would look like).
  **Gate:** time-bound — after the user explicitly directs Cascade B resolution.
  **Why (if revived):** would resolve the post-context phase of `articulate_simple` (referenced in the meaning-layer doc's §9 as currently OUT OF SCOPE) and articulate the runtime-mode-specific re-invocation patterns (e.g., "context-informed-refinement" that re-runs only Rephrase with new substrate). Per the `2026-06-07_12-22` finding's cascade-acknowledgment-without-pre-decision pattern, Cascade B should not be pre-decided here; explicit user direction is the revival trigger.

- **What:** Test the hybrid-declarative-imperative-process-spec pattern (sample-size 1 at this inquiry) across additional disciplines' process-layer specs.
  **Gate:** condition-bound — when 3+ discipline-explainer-discipline process-layer specs have been written using the pattern.
  **Why (if revived):** would promote the pattern from DEFERRED-revival to ACTIONABLE if transferability holds, or refine the pattern's scope if it doesn't transfer.

- **What:** Test the layered-IA-for-spec-docs pattern transferability across additional discipline-explainer-discipline spec docs.
  **Gate:** condition-bound — when 3+ discipline-explainer-discipline spec docs have been written using the pattern (this inquiry is sample-size 2; the `2026-06-07_13-30` inquiry was sample-size 1).
  **Why (if revived):** would promote the pattern from DEFERRED-revival to ACTIONABLE meta-pattern if the pattern holds across multiple disciplines.

- **What:** Test the discipline-level-process-skeleton-as-runner-spec-foundation pattern (the assembly emergent from this inquiry's Innovation discipline; sample-size 1).
  **Gate:** condition-bound — when 3+ discipline-explainer-disciplines have both a discipline-level process spec AND multiple runner-side specs derived from it.
  **Why (if revived):** would promote the pattern from DEFERRED-revival to ACTIONABLE meta-pattern if discipline-level skeleton + per-runner specs proves a consistent ecosystem shape.

## Reasoning

### Why the verdict was a discipline-level skeleton doc rather than runner-only specs

The meaning-layer doc's §9 is the closest the project comes to a position on where process-layer content should live: "Process-layer concerns — how the runner reads articulate's output; how the spawn-or-process decision is made when Itemize emits count > 1; how late-split re-fires are triggered. These live in runner-side specs, one per runner."

A strict reading of §9 would route ALL process-layer content to per-runner specs. But §9 names runner-side concerns (how the RUNNER reads; how the spawn-or-process decision is made; how the re-fires are TRIGGERED by the runner). It does not name the discipline-level skeleton — the gates that fire regardless of which runner runs, the LLM-judgment edges that exist inside the discipline regardless of the runner's surrounding mechanism, the LAYER 1 modes that detect failures at end-of-invocation regardless of the runner. That discipline-level skeleton has to exist somewhere. The strict reading of §9 leaves it implicit, scattered across the meaning-layer doc + 11 prior findings.

The Sensemaking discipline's Ambiguity 3 ambiguity-collapse explicitly tested this: the strongest counter-interpretation to "new sibling doc" was "embed in runner specs per §9 literal commitment; discipline-level process doc is over-engineered." That counter fails because §9 routes RUNNER-side process to runner specs but does NOT prohibit a discipline-level process spec. The two are complementary: the discipline-level spec gives the skeleton; runner specs flesh out per-runner mechanism choices. Without the discipline-level spec, each runner-author re-derives the skeleton from the meaning-layer doc + 11 prior findings — costly, error-prone, inconsistent.

The Innovation discipline's Mechanism 3 Q1.8 piece-level Inversion (intervention-shape axis) tested all four alternative artifact-shapes (Option B embedded in runner specs only; Option C inline in finding only; Option D appended to meaning-layer doc; Option E sub-divided into multiple sub-specs). All four were killed on structural grounds (Option B leaves skeleton absent; Option C non-persistent; Option D violates §9; Option E over-fragments). The new sibling doc survives all four killer objections.

The Critique discipline's C2 candidate evaluation re-tested the Option B-primary alternative under multi-axis prosecution (user-perspective, failure-case scenarios, spec-gap probes) and confirmed the new sibling doc is the right verdict.

### Why HYBRID style rather than pure-declarative or pure-imperative

The meaning-layer doc's §6 lightweight stance authorizes "LLM-judgment divergence at these edges by design." Pure-imperative spec at the LLM-judgment edges would over-specify them — producing pseudo-checker-code that violates §6's stance. Pure-declarative spec at the deterministic gates (stage entry/exit + end-of-invocation) would lose deterministic specification — runners would have to reverse-engineer the control flow from descriptions.

The hybrid style is structurally correct, not a compromise: deterministic gates need imperative (control flow); LLM-judgment edges need declarative (latitude per §6). The Domain Transfer mechanism in the Innovation discipline confirmed this through cross-domain convergence: scientific protocols (explicit checkpoints + verification criteria); cooking recipes (imperative procedure + "season to taste" hand-off points to executor judgment); military doctrine (declarative principles + imperative tactics); and native software discipline-explainer specs (`/surfacing`, `/sense-making`, `/decompose`, `/innovate`, `/td-critique` all use HYBRID-of-multi-section structure). Four sources from three different domain types converge on hybrid declarative + imperative as the appropriate pattern for process-layer specs.

### Why 7 LLM-judgment edges and 9 LAYER 1 modes rather than fewer or more

The 7-edge count is determined by the meaning-layer doc + cascade refinements: §6 names 3 explicit edges (cold-context detection; intrinsic-vs-extrinsic exclusion-ambiguity routing; MQA reconcile-vs-surface threshold) plus "and similar LLM-judgment points." The four cascade refinements introduce four more (2-shape determination; AMBIGUITY-NATURE operationalization; multi-source composition runtime enforcement; variant count determination). Each is grounded; reduction would collapse genuinely distinct judgment points.

The 9-mode count is determined by the foundational and cascade-era contributions: the `2026-06-04_07-48` foundational process-layer finding established 4 LAYER 1 modes; the `2026-06-04_14-14` finding added a fifth; the meaning-layer doc's §7 added a sixth ("MQ2 identified-ambiguities-list missing kinds-axis or stance-axis"); the four cascade refinements add three more failure signatures. The Innovation discipline's Q1.6 piece-level Inversion produced a refinement to this count: of the three "cascade-era additions," one (Rephrase variant-set drifts outside multi-source composition bounds) was already named in the meaning-layer doc's §7 from the `2026-06-07_11-40` cascade refinement — it is a re-framing at cascade level, not a genuinely new mode. Two are genuinely new (2-shape violation; AMBIGUITY-NATURE conflation). The new spec doc explicitly distinguishes "genuinely new cascade-era additions" from "re-framed at cascade level" in the LAYER 1 mode self-check section.

### Why asymmetric-failure was elevated from 2-shape-specific to meta-rule

The `2026-06-06_21-52` cascade finding originated asymmetric-failure for 2-shape determination specifically. But the `2026-06-07_11-40` cascade finding invoked asymmetric-failure for Rephrase keep-together (preserve openness with more variants under uncertainty). The `2026-06-06_23-18` cascade finding invoked asymmetric-failure for MultiDepth perceivability (emit what's perceivable; if uncertain, prefer to emit). Three cumulative uses across three cascade findings + the foundational use for Itemize keep-together (per the meaning-layer doc's §2.1) ground asymmetric-failure as a meta-rule at LLM-judgment edges, not a 2-shape-specific rule. The Critique discipline's C5 candidate evaluation surfaced a refinement to the meta-rule framing: rather than just stating asymmetric-failure as a meta-rule, the new spec doc should articulate the asymmetric-failure DIRECTION per edge. This is reflected in the Finding section above — each of the 7 LLM-judgment edges has its asymmetric-failure direction named explicitly.

### Why 04-07-48 STANDS-and-extends rather than STANDS-verbatim or fully-superseded

The Sensemaking discipline's Ambiguity 7 ambiguity-collapse tested "04-07-48 fully superseded" against structural evidence and killed it: the 3-phase runtime, the per-operation firing-format for non-Rephrase operations, and the LAYER 1 / LAYER 2 framework are all preserved in current state. The Critique discipline's C6 candidate evaluation tested "04-07-48 STANDS-verbatim" and surfaced a refinement: the per-operation firing-format for Rephrase has been EXTENDED by the `2026-06-07_11-40` cascade refinement (Rephrase now reads 4 sources, generates variant-set spanning identified ambiguities, applies asymmetric-failure bias). STANDS-verbatim would fail to integrate that cascade refinement; fully-superseded would lose the rest of the foundation. The STANDS-and-extends framing is structurally correct: it preserves what stands AND honors what cascaded. The new spec doc's inheritance map distinguishes these explicitly.

### Why cumulative cascade pressure was named honestly with touch-type distinction

The `2026-06-07_12-22` finding established the cascade-acknowledgment-at-cumulative-pressure pattern: when cumulative refinements accumulate across multiple inquiries, the integrating finding should name the cumulative pressure honestly rather than hiding it behind individual-touch framings. This inquiry inherits 11 priors across 4 distinct touch types. The Critique discipline's C7 candidate evaluation surfaced a refinement: rather than just naming the touch count (6), the finding should distinguish the touch TYPES (1 foundational + 4 cascade refinement + 1 structural redesign + 1 process-layer extraction = 4 touch types across 6 touches). The touch-type distinction is load-bearing because the four types do different work: foundational sets the framework; cascade refinements modify specific operations' essence; structural redesign reorganizes the meaning-layer doc; process-layer extraction extracts the process-layer spec from the cumulative state. The Finding Summary above and the new spec doc's calibration-state section both reflect this touch-type distinction.

## Open Questions

### Monitoring

- Observable after 3+ discipline-explainer-discipline process-layer specs have been written using the patterns introduced here (hybrid declarative + imperative style; layered IA; discipline-level skeleton as runner-spec foundation): do the three meta-pattern candidates promote from DEFERRED-revival to ACTIONABLE? Or does evidence suggest a different pattern boundary?
- Observable after the new process-layer doc is read by the four reader types from the `2026-06-07_13-30` finding (fresh, returning, downstream-consumer, builder): does layered IA hold for process-layer spec docs, or does process-layer have different navigation needs than meaning-layer?

### Blocked

- Cascade B (two-pass-as-discipline-identity design) — blocked by the cascade-acknowledgment-without-pre-decision pattern from the `2026-06-07_12-22` finding. Cannot be answered until the user explicitly directs Cascade B resolution.

### Research Frontiers

- The broader pattern of "process-layer-design for discipline-explainer-disciplines in general" — does the pattern of (foundational process-layer finding + cascade refinements + structural redesign + process-layer extraction) recur across other discipline-explainer-disciplines? No known path; requires multi-discipline observation.
- A "cross-cutting shared-vocab document" for multi-runner ecosystems — would such a document emerge as natural complement to a discipline-level process spec + multiple runner-side specs? No known path; depends on multi-runner ecosystem actually emerging.

### Refinement Triggers

- Next cascade refinement to `articulate_simple` — when a future inquiry refines an operation's meaning at the meaning-layer level, the process-layer spec's per-stage runtime procedure for that operation needs corresponding refinement. Trigger: any new finding whose `Synthesis Trigger` lists `articulate_simple` meaning-layer commitments.
- New LLM-judgment edge surfaced — when a future cascade refinement names a new LLM-judgment point in `articulate_simple`'s runtime, the LLM-judgment-edges section (7 edges) extends. Trigger: any finding that cites the meaning-layer doc's §6 "and similar LLM-judgment points" clause and names a new point.
- New LAYER 1 mode surfaced — when a future cascade refinement names a new operational failure signature, the LAYER 1 modes section (9 modes) extends. Trigger: any finding that adds a per-invocation-detectable failure mode to `articulate_simple`.
- Layered-IA pattern reaches sample-size 3 — when a third discipline-explainer-discipline spec doc is written using layered IA, the meta-pattern can promote from DEFERRED-revival to ACTIONABLE.
- Hybrid-declarative-imperative-process-spec pattern reaches sample-size 3 — same trigger as above for the hybrid style pattern.
- Discipline-level-process-skeleton-as-runner-spec-foundation pattern reaches sample-size 3 — when 3+ discipline-explainer-disciplines have both a discipline-level process spec and multiple runner-side specs derived from it, the pattern can promote.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
okay now should dive deep of articulate simple (desc in devdocs/how_articulate_simple_should_be.md) process layer , since we made lots of changes , lets redo this
```

</details>
