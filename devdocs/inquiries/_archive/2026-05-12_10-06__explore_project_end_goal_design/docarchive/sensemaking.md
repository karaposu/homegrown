# Sensemaking — project-end-goal-aware design for /explore

## User Input
`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-12_10-06__explore_project_end_goal_design/_branch.md`

Prior outputs consumed: this inquiry's `exploration.md`. Parent inquiry's iter-2 finding is the prior commitment (`devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/finding.md`).

---

## SV1 — Baseline Understanding

From exploration: the iter-2 /explore design needs additions to serve the project's end-goal trajectory: explicit staged-iteration support, cross-invocation composability, staging-aware telemetry, and a staging-boundary regression failure mode. The /explore-vs-/navigation boundary holds despite `nav_north_star.md`'s vocabulary use (the document uses "navigation" for what is operationally /explore). The runner-vs-discipline separation is clear: staging is runner-level orchestration of multiple /explore invocations. But the relationships between these additions, where each lives (discipline spec vs runner spec vs meta artifact), and the activation timing of iter-2's deferred items (especially SK-MAX-4 Cross-Inquiry Merge Contract) are not yet stable.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1.** Preserve iter-2 commitments verbatim (verb-meaning, 5-section skeleton, NOT-list, mode-orthogonality, idempotency, tiered evolution path).
- **C2.** Serve the project's end-goal trajectory: Baldwin cycles, autonomy ladder, /intuit (Predictive RC) as composable substrate, observable indicators.
- **C3.** Support staged for-loop pattern (per `nav_north_star.md`) explicitly.
- **C4.** Maintain /explore vs /navigation boundary (iter-1 /navigation: enumerate routes from known state).
- **C5.** Do not add a third operational mode (mode-orthogonality from iter-2).
- **C6.** Runnable today at Level 0 (manual trigger); clear path to autonomous orchestration at Level 3+.
- **C7.** Keep discipline-vs-runner separation clean: the discipline is a single cognitive operation; the runner orchestrates multiple invocations.

### Key Insights

- **K1.** `nav_north_star.md`'s "navigation" vocabulary refers to /explore operations (mapping a territory's contents). Vocabulary reconciliation is its own decision separate from operational design.
- **K2.** The for-loop staging pattern is **runner-level orchestration** of multiple /explore invocations, NOT a single-invocation behavior. Each round is one /explore call; the runner re-invokes.
- **K3.** SK-MAX-4 (Cross-Inquiry Merge Contract) — iter-1 DEFERRED — has its revival trigger MET by the end-goal lens (staged for-loop needs cross-invocation referencing).
- **K4.** Only the resolution-level field of SK-STD+ Input Contract becomes load-bearing for staged execution. The full typed Input Contract can stay deferred; promote the one field.
- **K5.** Composability (local maps merging into bigger maps) is the most under-specified attribute when end-goal-relevant attributes are listed.
- **K6.** "Node" (nav_north_star.md) and "surfaced item" (iter-2) are synonyms in nav-adjacent contexts.
- **K7.** Staging-boundary regression is a new failure mode (a prior-pass surfaced item has no explorable sub-structure when re-explored at finer resolution).

### Structural Points

- **SP1.** Three operational concerns this inquiry addresses, each at a different artifact layer:
    - (a) /explore-internal additions → live in `references/explore.md` and `SKILL.md`
    - (b) Staged-iteration runner pattern → lives in a new artifact (NOT /MVL+; see Ambiguity 1)
    - (c) `nav_north_star.md` vocabulary reconciliation → meta-decision about that document
- **SP2.** The iter-2 5-section skeleton (Identity / Components / Process / Quality / Output) absorbs the /explore-internal additions:
    - Resolution-level field → Process (Step 0 declaration)
    - Staging-aware telemetry → Output (Telemetry section)
    - Staging-boundary regression failure mode → Quality
    - SK-MAX-4 merge contract activation → Output (a new Merge Contract subsection)
- **SP3.** Spec-level vs implementation-level activations are distinguished. Spec-level activations are cheap and forward-looking (document the contract; code can target it later). Implementation-level activations require existing or planned code. All this inquiry's activations are spec-level.

### Foundational Principles

- **P1. Discipline-vs-runner separation.** The discipline (/explore) formalizes one cognitive operation per invocation; the runner orchestrates multiple invocations.
- **P2. End-goal-served design.** Every discipline attribute should trace to a project-end-goal need.
- **P3. Explicit revival triggers for deferred items.** A deferred item without a revival trigger is a hidden promise; with a trigger, it's a forward commitment.
- **P4. Spec-level activations are forward-looking, not aspirational.** A documented contract is a target for future code, not a claim that code exists.

### Meaning-Nodes

- **MN1. Composable outputs** — local /explore maps merge into bigger maps via shared identity contract.
- **MN2. Resolution-level** — the coarseness of a single /explore invocation, expressed as a quantitative anchor (expected surfaced-item count).
- **MN3. Staging** — runner-level orchestration of multiple /explore invocations at progressively finer resolutions.
- **MN4. Node identity** — a surfaced item from a prior-pass /explore that subsequent passes reference by stable ID + descriptive label.
- **MN5. Staging-boundary regression** — failure mode where a prior-pass surfaced item has no explorable sub-structure when next-pass /explore runs on it.
- **MN6. Staged-explore runner** — a runner artifact (separate from /MVL+) that orchestrates /explore invocations across stages.

### SV2 — Anchor-Informed Understanding

With anchors, the inquiry's output crystallizes to:

> *Four /explore spec refinements + one new runner artifact + one meta-vocabulary reconciliation.* The /explore-internal additions REFINE the iter-2 finding. The new runner is a SEPARATE artifact. The vocabulary reconciliation is a SEPARATE meta-decision.

---

## Phase 2 — Perspective Checking

### Technical / Logical

Does the proposed architecture cohere?

- /explore stays a single-invocation discipline (preserved).
- Runner-level staging orchestrates multiple invocations.
- The merge contract bridges cross-invocation references.

This is structurally clean. **New anchor:** the runner-pattern locus question is real — should it be in /MVL+ or a separate artifact? See Ambiguity 1.

### Human / User

Does the design honor the user's framing? User said: *"can we run staged explore as defined in devdocs/nav_north_star.md."* The design provides: (a) confirmation that staged-explore is /explore + runner orchestration; (b) attribute names for what /explore needs; (c) recommendation for a separate staged-explore runner pattern. User can act on this.

### Strategic / Long-term

The staged-explore runner is the **EXPLORATION counterpart to /MVL+**. /MVL+ runs the cognitive loop on a question; staged-explore maps a territory. The two are complementary runners for different purposes. Long-term, this provides the project a clear runner taxonomy:
- /MVL — short cognitive loop (S→I→C)
- /MVL+ — extended cognitive loop (E→S→D→I→C)
- /meta-loop — stateful traversal across multiple inquiries
- /staged-explore (proposed) — territory mapping via for-loop /explore orchestration

**New anchor:** the runner taxonomy is itself an end-goal-relevant artifact. Each runner serves a different cognitive purpose at a different autonomy-ladder rung.

### Risk / Failure

Where could the design fail?

- **Risk-1:** Adding a new runner is a non-trivial commitment. If the user just wanted "tell me how to do this manually," a runner doc is overkill.
- **Risk-2:** SK-MAX-4 activation as spec-only requires future implementation. If never built, the contract is dead.
- **Risk-3:** Staging-boundary regression is speculative (not yet observed in practice).
- **Risk-4:** The "/staged-explore" runner overlaps with /meta-loop in a way that needs careful boundary work — /meta-loop also orchestrates multiple inquiries.

Mitigations:
- For Risk-1: distinguish what the user can do TODAY (run /explore manually in a for-loop following the doc) from what a future skill-ified runner would do. Spec the runner pattern; defer skill-ification.
- For Risk-2: spec-level activation is non-aspirational because it lets users manually merge maps NOW. Implementation can wait.
- For Risk-3: name the failure mode with explicit "speculative; recognition signal needs empirical validation" framing. Calibration-state-dependent.
- For Risk-4 (NEW): /meta-loop orchestrates inquiry-level moves (running MVL+ as probe, navigation as eyes); /staged-explore orchestrates a single discipline's invocations at progressive resolutions. Different scope. **New anchor:** /staged-explore vs /meta-loop boundary needs to be named.

### Resource / Feasibility

Adding 4 spec refinements + 1 new artifact in one inquiry: is this too much?

- 3 of 4 spec refinements are CHEAP (one field; one telemetry block; one failure-mode entry).
- 1 spec refinement (SK-MAX-4 merge contract) is MODERATE — needs a Merge Contract subsection but spec-only.
- 1 new artifact (staged-explore runner doc) is MODERATE — needs structured documentation but no skill code.

Total work: bounded. **Feasible to ship in one finding.**

### Definitional / Internal Consistency

Does the design contradict prior commitments?

- Iter-2 NOT-list: preserved (no additions cross neighbor boundaries).
- Iter-2 mode-orthogonality: preserved (no third operational mode added; staging is runner-level).
- Iter-2 idempotency: preserved (each /explore invocation is still idempotent within a single invocation).
- Iter-1 5-section skeleton: preserved (all additions slot into existing sections).
- /navigation iter-1 definition: preserved (boundary holds; `nav_north_star.md` is a naming issue, not operational change).
- /meta-loop role: preserved (/staged-explore is a different scope of orchestration).

Internal consistency on the new framing: the proposed staged-explore runner is operationally consistent with iter-2's "cross-invocation re-explore delegated to runner" — the runner is now named.

### Definitional / Frame-exit Completeness

**Gating predicate:** does the inquiry have inherited multi-value terms used across ≥2 distinct propositions within its committed structures? Terms used: "mode" (already disambiguated in iter-2), "runner" (used in two senses: existing runners + proposed new runner — but at the same orchestration level), "navigation" (used at /navigation discipline + nav_north_star.md vocabulary — but the latter is in an analyzed artifact, not in this inquiry's committed structures).

Gating predicate yields **FALSE** for this iteration. Perspective skipped.

### Phase / Calibration-State

Does the design depend on calibration the project has?

- The staged-explore runner: project HAS /MVL+ and /meta-loop as existing runners; adding a new runner pattern is consistent with the project's runner pattern. **Calibration-state-OK.**
- SK-MAX-4 activation: spec-level activation is calibration-OK; implementation requires the project building merge code, which is downstream. **Spec-level OK; impl-level dependent.**
- Staging-boundary regression failure mode: speculative; not yet observed. **Calibration-state-dependent** — name explicitly in spec with empirical-validation note.
- Resolution-level field: quantitative anchor is calibration-OK (project can use it today).

**New anchor:** name the spec entries that are calibration-state-dependent so the project can monitor them.

### SV3 — Multi-Perspective Understanding

After perspectives:

> *The design crystallizes to four /explore spec-level refinements + one new runner artifact (staged-explore) + one meta-vocabulary reconciliation. All activations are spec-level (no implementation work demanded). One new boundary issue surfaces: /staged-explore vs /meta-loop, which must be named so the runner taxonomy stays clean.*

Major shifts from SV2:
- Runner-taxonomy framing surfaced (/MVL, /MVL+, /meta-loop, /staged-explore as complementary runners).
- /staged-explore vs /meta-loop boundary work added.
- Spec-level vs implementation-level activations explicitly distinguished.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Where does the staged-explore runner-pattern live?

Three readings:
- (a) Add to /MVL+ as a new mode.
- (b) Create a new runner skill `/staged-explore`.
- (c) Create a runner-pattern DOC (no skill); skill-ification deferred.

**Strongest counter to (b)/(c), pro-(a):** keeping all runners in one place is operationally simpler.

**Why (a) fails (structural grounds):** /MVL+ formalizes the cognitive loop on a QUESTION (E→S→D→I→C). Staged-explore formalizes TERRITORY MAPPING via repeated /explore. These are distinct cognitive purposes at the runner level. Folding them into /MVL+ would conflate two operations — analogous to folding /explore into /comprehend, which was killed in iter-1 critique on the same structural grounds.

**Strongest counter to (c), pro-(b):** a doc is documentation-only; the user wants something runnable.

**Why (c) is acceptable:** the user explicitly accepts "manual-trigger v1 is acceptable" per `nav_north_star.md`. A doc + manual triggering serves v1. Skill-ification is future work.

**Resolution:** **Create a runner-pattern doc** (reading c) at `homegrown/runners/staged_explore.md` or similar; skill-ification is DEFERRED with revival trigger ("manual orchestration becomes unsustainable, OR autonomous mode-selection ships at Level 3+").

- **Confidence:** HIGH on (c) over (a). MEDIUM-HIGH on (c) over (b).
- **Now fixed:** staged-explore = separate runner artifact (not /MVL+ extension).
- **No longer allowed:** folding staged-explore into /MVL+.
- **Depends on this:** placement of the runner doc; relationship to existing runner artifacts.

### Ambiguity 2: SK-MAX-4 activation — spec-level or implementation-level?

**Strongest counter (against spec-only):** spec without implementation is aspirational; users can't actually merge maps.

**Why the counter fails:** spec-level activation enables MANUAL merging now (user reads two /explore outputs, combines by hand or by LLM-aided merge). The contract exists; future code targets it. This is non-aspirational by the same logic as "the runner doc + manual triggering" — manual is real, not aspirational.

**Resolution:** **Spec-level activation in this inquiry; implementation-level deferred.** Add the merge contract specification to /explore's Output section as a "Merge Contract" subsection that specifies the node-identity contract and the merge operation's shape.

- **Confidence:** HIGH.
- **Now fixed:** SK-MAX-4 promoted to spec-level ACTIONABLE; implementation deferred.
- **No longer allowed:** treating SK-MAX-4 as fully deferred (it's now ACTIONABLE-at-spec-level).

### Ambiguity 3: "Resolution-level" — typed values or quantitative anchor?

**Strongest counter to typed (coarse/medium/fine):** different territories need different resolutions; typed values are too coarse-grained.

**Why the counter holds:** a codebase's "coarse" (10 high-level directions) is qualitatively different from a research field's "coarse." Resolution should be quantitative.

**Resolution:** Resolution-level uses a **quantitative anchor** — the invocation declares the expected number of surfaced items (or a range). Examples: "resolution: ~10 items" (first pass), "resolution: ~5–10 items per parent" (second pass).

- **Confidence:** MEDIUM-HIGH. Wording can be refined by innovation.
- **Now fixed:** resolution-level = quantitative anchor.
- **No longer allowed:** typed-value resolution-level.

### Ambiguity 4: Staging-boundary regression — speculative or observed?

The failure mode is not yet observed in practice.

**Counter:** speculative entries pollute the spec.

**Why the counter doesn't displace:** the failure mode is structurally plausible (a prior-pass item might be atomic). Spec entry with explicit "speculative; needs empirical validation" framing is a forward commitment, not pollution.

**Resolution:** Name the failure mode in the Quality section with the framing: *recognition signal: empirical (we expect to see it during staged execution; validation pending). Corrective action: re-classify the prior-pass item as "atomic-at-this-resolution" rather than as missed sub-structure.*

- **Confidence:** MEDIUM. Acceptable as a forward-looking spec entry.

### Ambiguity 5: Node identity — sequential numbering, content hash, or LLM label?

**Strongest counter to LLM-label-only:** LLM labels can drift across invocations.

**Resolution:** Use **sequential ID + LLM-generated label** together. The sequential ID provides stability across invocations (referencing remains stable even if labels drift); the label provides human readability. Format example: `N1: "How loops are structured"`; second-pass references `N1` by ID, can show the label for context.

- **Confidence:** HIGH.

### Ambiguity 6 (load-bearing concept test on "staged"): consistency check

"Staged" usage across the inquiry: `nav_north_star.md` ("broken into rounds"), iter-2 decomposition ("runner-level orchestration"), this inquiry's framing ("staged for-loop"). All refer to the same operation: a sequence of /explore invocations where each round operates on outputs of the prior.

**Resolution:** "Staged" is consistent across contexts. No ambiguity.

- **Confidence:** HIGH.

### Ambiguity 7: REFINE iter-2 finding or SEPARATE artifact?

The additions split:
- 4 spec-level additions to /explore → REFINE iter-2 finding.
- 1 SK-MAX-4 promotion (was DEFERRED in iter-2) → REFINE iter-2's tiered evolution path.
- 1 new runner-pattern doc → SEPARATE NEW artifact (the staged-explore runner spec).
- 1 nav_north_star.md vocabulary reconciliation → SEPARATE meta-decision.

**Resolution:** Mixed verdict. This inquiry's finding has:
- `refines: devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/finding.md` (the iter-2 finding) — for the /explore-internal additions.
- The iter-2 finding's frontmatter should gain a `refined-by:` pointer back.
- The staged-explore runner doc is named in this finding's Next Actions but lives as a separate artifact.
- The nav_north_star.md reconciliation is a separate Next Action.

- **Confidence:** HIGH.

### Ambiguity 8 (NEW from Risk perspective): /staged-explore vs /meta-loop boundary

**Where do they overlap?** Both orchestrate multiple invocations across stages.

**How do they differ?**
- /meta-loop orchestrates **inquiry-level moves** (running MVL+ as probe; navigation as eyes; selecting which sub-question to pursue next). Operates on inquiry artifacts.
- /staged-explore orchestrates **discipline-level invocations** (running /explore at progressively finer resolutions). Operates on a single discipline's outputs.

The scope is different. /meta-loop is about the inquiry's question-space traversal; /staged-explore is about a territory's resolution-progression for a single mapping task.

**Resolution:** Different scope; clean boundary. /meta-loop ↔ /staged-explore is similar to /MVL+ ↔ /MVL (different scopes, complementary).

- **Confidence:** HIGH.
- **Now fixed:** /staged-explore is a discipline-orchestration runner; /meta-loop is an inquiry-orchestration runner. Distinct scopes.

### SV4 — Clarified Understanding

> *To support the project's end-goal trajectory while preserving the iter-2 meaning-definition, /explore needs four cheap spec-level refinements + one new runner artifact + one meta-vocabulary reconciliation. The four refinements: resolution-level field as quantitative anchor in Step 0; staging-aware telemetry; staging-boundary regression failure mode (speculative, calibration-state-dependent); SK-MAX-4 Cross-Inquiry Merge Contract activated at spec level with node-identity contract (sequential ID + LLM label). The new artifact: a /staged-explore runner-pattern doc (separate from /MVL+; doc-only v1; skill-ification deferred). The meta-decision: preserve nav_north_star.md as document, migrate operational content to /explore's spec, add vocabulary note. The runner taxonomy gains a fourth entry (/MVL, /MVL+, /meta-loop, /staged-explore) with clean scope boundaries: /staged-explore is discipline-orchestration; /meta-loop is inquiry-orchestration.*

---

## Phase 4 — Degrees-of-Freedom Reduction

### What is now fixed

| Element | Decision |
|---|---|
| Locus of staged-explore | Separate runner artifact (not /MVL+ extension) |
| Form of staged-explore v1 | Runner-pattern doc; skill-ification deferred |
| SK-MAX-4 activation | Spec-level in this inquiry; implementation deferred |
| Resolution-level | Quantitative anchor (expected item count or range) |
| Node identity | Sequential ID + LLM-generated label |
| Staging-boundary regression | Speculative; spec-entry with empirical-validation note |
| nav_north_star.md | Preserved as document; operational content migrated to /explore's spec; vocabulary note added |
| This finding's frontmatter | `refines:` iter-2 finding (in parent inquiry) |
| Iter-2 finding's frontmatter | Should gain `refined-by:` pointer back |
| Iter-2 deferred items | SK-MAX-4 promoted to spec-level ACTIONABLE; SK-STD+ Input Contract partial-promoted (resolution-level field only); others unchanged |
| /staged-explore scope | Discipline-orchestration (single discipline's invocations) |
| /meta-loop scope | Inquiry-orchestration (inquiry-level traversal moves) |
| Runner taxonomy | /MVL, /MVL+, /meta-loop, /staged-explore (4 entries with distinct scopes) |

### What is eliminated

- Folding staged-explore into /MVL+.
- Folding staged-explore into a third operational mode of /explore.
- Implementation-level SK-MAX-4 activation in this inquiry.
- Free-form (typed) resolution-level.
- Treating nav_north_star.md as having operational errors.
- Conflating /staged-explore with /meta-loop.

### What remains viable (for downstream)

- *Component-level decisions for the runner-pattern doc* — what sections it has, what the for-loop looks like operationally (decompose's job).
- *Shape variants for each of the 4 spec refinements + 1 runner doc* — minimum / standard / maximal versions (innovate's job).
- *Adversarial test of the design* — does the runner-doc-vs-skill split hold? Does SK-MAX-4 spec-level activation actually let users merge? Is staging-boundary regression a real failure mode? (critique's job).

### SV5 — Constrained Understanding

The design space is highly constrained. Remaining degrees of freedom are at the component-and-shape level (decompose's and innovate's domains). Critique should stress-test the doc-vs-skill v1, the SK-MAX-4 spec-level-only activation, and the speculative staging-boundary regression failure mode.

---

## Phase 5 — Conceptual Stabilization

### Accommodation Trigger Check

Did new perspectives destabilize the model? **No.** Each perspective added refinements without forcing structural revision. Risk perspective added the /staged-explore vs /meta-loop boundary anchor — accommodated cleanly. Strategic perspective added the runner-taxonomy framing — accommodated. Calibration-state perspective added the spec-level vs implementation-level distinction — accommodated.

### SV6 — Stabilized Model

> **To support the project's end-goal trajectory (Baldwin cycles, autonomy ladder, /intuit-composable substrate) while preserving the iter-2 meaning-definition and 5-section skeleton, /explore needs four spec-level refinements to its existing two-file pair, plus one new runner artifact, plus one meta-vocabulary reconciliation.**
>
> **The four /explore spec refinements:**
> 1. *Resolution-level field* in Step 0 input-contract declarations (alongside cognitive-commitment-mode, territory-type-mode, entry-point), expressed as a quantitative anchor (expected number of surfaced items or a range).
> 2. *Staging-aware telemetry* fields in the Telemetry section (first-pass node count; second-pass branching factor; resolution-progression evidence).
> 3. *Staging-boundary regression* failure mode in the Quality section (speculative; needs empirical validation; corrective: re-classify the prior-pass item as atomic-at-this-resolution).
> 4. *Spec-level activation of SK-MAX-4 (Cross-Inquiry Merge Contract)* — promoted from iter-2-DEFERRED to ACTIONABLE-at-spec-level. Includes the node-identity contract (sequential ID + LLM-generated label) for cross-invocation referencing.
>
> **The new runner artifact:** `/staged-explore` runner pattern as a separate doc (not /MVL+ extension; /MVL+ runs the cognitive loop on a question, /staged-explore orchestrates /explore invocations across resolution stages). v1 is manual-trigger doc; skill-ification deferred with revival trigger.
>
> **The meta-vocabulary reconciliation:** `nav_north_star.md` is preserved as a document; its operational content (staged for-loop pattern; whole-codebase vs directional modes; composability) is migrated to /explore's spec; a vocabulary note clarifies that "navigation" in nav_north_star.md refers to /explore operations.
>
> **The runner taxonomy gains a fourth entry:** /MVL, /MVL+, /meta-loop, /staged-explore — four runners with distinct scopes. /staged-explore vs /meta-loop boundary: /staged-explore is discipline-orchestration (single-discipline invocations at progressive resolutions); /meta-loop is inquiry-orchestration (inquiry-level traversal moves).
>
> **This inquiry's finding REFINES the iter-2 finding** (additional design details serving the project's end-goal trajectory). Iter-2 finding's frontmatter should gain a `refined-by:` pointer.

### How SV6 Differs from SV1

| Aspect | SV1 | SV6 |
|---|---|---|
| Additions named | "additions needed" (vague) | 4 spec refinements + 1 new artifact + 1 meta-decision, each specified |
| Locus | Unclear | /explore spec (4 additions); separate doc (runner); meta-decision (nav_north_star.md) |
| Runner taxonomy | Implicit | Explicit 4-entry taxonomy with scope boundaries |
| /staged-explore vs /meta-loop | Unsurfaced | Named and resolved (different scopes) |
| Activation type | Mixed | Spec-level for all this inquiry; implementation explicitly deferred |
| Iter-2 finding relationship | Unspecified | REFINES; iter-2 gets `refined-by:` pointer |

---

## Frontier (open questions for downstream disciplines)

1. *(for /decompose)* Partition the 4 spec refinements + the runner doc into coupled-vs-independent pieces. Some are tightly coupled (e.g., resolution-level field ↔ staging telemetry); others can be shipped independently.
2. *(for /innovate)* Generate candidate structures for the staged-explore runner-pattern doc. Options: minimal (one-page doc with for-loop pseudocode); standard (full discipline-style spec with sections); maximal (skill-style SKILL.md + reference file paired structure).
3. *(for /innovate)* Generate candidate phrasings for the resolution-level field (quantitative anchor wording).
4. *(for /td-critique)* Stress-test the doc-vs-skill v1 decision. Is a doc sufficient, or does the user actually need a skill now?
5. *(for /td-critique)* Stress-test SK-MAX-4 spec-level-only activation. Does it actually let users merge maps manually, or is the contract too thin without code?
6. *(for /td-critique)* Stress-test the speculative staging-boundary regression failure mode. Is it premature to name a failure mode not yet observed?
7. *(for /td-critique)* Stress-test the runner-taxonomy completeness. Are 4 runners (/MVL, /MVL+, /meta-loop, /staged-explore) enough, or does the taxonomy need other entries?

---

## Telemetry

- **Perspectives applied:** 8 (technical, human, strategic, risk, resource, definitional internal-consistency, frame-exit [gating FALSE — skipped], calibration-state)
- **New anchor types per perspective:** strategic → runner-taxonomy framing; risk → /staged-explore vs /meta-loop boundary; calibration-state → spec-level vs implementation-level distinction
- **Ambiguity resolution ratio:** 8/8 (5 HIGH, 2 MEDIUM-HIGH, 1 MEDIUM)
- **SV delta:** large — SV1 ("additions needed") → SV6 (4 specific spec refinements + 1 runner artifact + 1 meta-decision + runner taxonomy with scope boundaries + iter-2 relationship clarified)
- **Anchor diversity:** 5/5 types
- **Failure modes checked:** Status Quo Bias (no — willing to depart from iter-2 structure where end-goal lens warrants); Premature Stabilization early-clarity (no — risk and calibration perspectives forced specific commitments); Premature Stabilization model-misfit (no — no destabilizing accommodations); Anchor Dominance (no — multiple load-bearing anchors: discipline-vs-runner; spec-vs-implementation; runner taxonomy; merge contract; staging telemetry); Perspective Blindness (no — risk perspective surfaced /staged-explore vs /meta-loop); Clean Resolution Trap (counter stated for each ambiguity); Self-Reference Blindness (yes applicable; corrective via external grounding: project end-goal documents are external reference; /comprehend's existing role is external comparator; the doc-vs-skill decision is grounded in the user's stated "manual-trigger v1 is acceptable").

## Self-Assessment

**Overall: PROCEED**

The design is stable. 8 ambiguities resolved with high confidence. Six commitments fixed (locus, form, activation type, resolution-level form, node-identity contract, runner-taxonomy scope). The /staged-explore vs /meta-loop boundary is named. Spec-level vs implementation-level activations are distinguished. The relationship to the iter-2 finding (REFINES) is clarified.

Decompose should next partition the 4 spec refinements + runner doc + meta-decision into coupled-vs-independent pieces. Innovate should propose shape variants. Critique should stress-test the doc-vs-skill v1 decision and the SK-MAX-4 spec-level-only activation.
