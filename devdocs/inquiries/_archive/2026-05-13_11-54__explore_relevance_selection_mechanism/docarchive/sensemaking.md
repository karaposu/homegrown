# Sensemaking — /explore Relevance-Selection Mechanism

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-13_11-54__explore_relevance_selection_mechanism/_branch.md`

Input: `_branch.md` + `exploration.md`. 17 candidates across 10 regions; two orthogonal axes surfaced (Filter/Annotation, Listing/Consumption). Three adjudications required: (1) which family is primary; (2) relationship to prior canonical-coverage and prior cheap-coverage-boost findings; (3) is the answer about Filter or Annotation. Meta-Inspection hooks H1, H3, H6, H8 to apply.

---

## SV1 — Baseline Understanding

The user is asking: how does `/explore` reliably CONSUME relevant content (not just list)? They corrected the prior finding for over-fixating on filesystem listing as the answer. The real bottleneck is the relevance-judgment step that decides which items get actually read at depth versus left as listed-but-unconsumed.

The exploration surfaced 17 candidates organized into mechanism families. The most important meta-observation: the candidate families operate at different LAYERS, not as alternatives at the same layer. Some are criteria-producers (Region A); some are application mechanisms (Regions G, H); some are alternatives to criteria-driven selection (Regions E, F); some are spec hygiene (Region I).

The right answer composes pieces ACROSS layers, not by picking one family.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1.** The prior cheap-coverage-boost finding fixated on the user's tactical hint and missed the structural problem. **The structural problem is the relevance-judgment step, not the listing step.**
- **C2.** The user used "for sure" and "simple" in the prior finding's context; this finding's context inherits both — must be minimum-sufficient AND structurally guaranteed.
- **C3.** `/explore`'s spec at `homegrown/explore/references/explore.md` already names "relevance" as one of five signal types in §2.1 Signal Detection, AND as an optional annotation layer in §2.2. The spec ALREADY recognizes relevance — it's just passive in practice. (Status quo bias risk noted.)
- **C4.** The Filter vs Annotation axis is real. Currently relevance is implemented as annotation (§2.2) and as one of five signal types (§2.1). What's missing is **relevance as an active gating filter** at Signal Detection time.
- **C5.** The Listing vs Consumption axis is real. Listing surfaces existence; consumption reads content. The prior finding mandated listing without addressing what comes between listing and consumption — which is **relevance judgment**.
- **C6.** The prior cheap-coverage-boost finding's filesystem-listing mechanism is not WRONG; it's MISPOSITIONED. Listing IS useful as input to relevance-selection. It doesn't become useless under this correction; its role gets demoted from "the answer" to "supporting input."
- **C7.** Compatible with prior identity-refresh finding's kinds-of-mapping typology: layout-mapping relevance differs from concept-mapping relevance. Relevance criteria can be inquiry-type-keyed (per the typology).

### Key Insights

- **K1.** The exploration's mechanism families operate at different LAYERS:
  - Layer L1 (Criteria production): Region A mechanisms (A1 Q/G-derived, A2 keyword+grep, A3 author-declared, A4 sub-question-bearing) — produce explicit relevance criteria
  - Layer L2 (Application of criteria): Region G (activate §2.1 signal), Region H (new cycle step), Region B (score-and-rank) — apply the criteria to make filter decisions
  - Layer L3 (Refinement): Region C (multi-pass) — iterate the application
  - Layer L4 (Alternatives to criteria-driven): Regions E (force-read), F (decompose-territory) — bypass criteria-judgment
  - Layer L5 (Spec hygiene): Region I (filter/annotation, listing/consumption distinctions) — prerequisite clarity
  - Layer L6 (Process): Region D (intuition / /intuit) — separate epistemic substrate
  - Layer L7 (Human-in-loop): J1 — escape hatch

The answer composes ACROSS layers, not by picking one family.

- **K2.** The minimum-sufficient composition is: **(L1) A1 (Q/G-derived criteria) + (L2) G1 (promote §2.1 relevance signal from passive to active filter) + (L5) I1 (filter-vs-annotation spec distinction).** Three small spec changes. Each is necessary; together they form a complete answer.

- **K3.** H1 (add a "Relevance Selection" cycle step) is CAUSAL-COSMETIC with G1. If G1 (active §2.1 relevance signal) is shipped, H1's new step is doing the same work under a different label. Pick one or the other; not both.

- **K4.** The prior cheap-coverage-boost finding is CORRECTS — its specific load-bearing claim ("filesystem listing IS the answer to coverage") is corrected. What's PRESERVED: the listing mechanism itself, repositioned as supporting input to relevance-selection rather than as the primary answer. The prior finding's Pre-Scan Mandate v1 architecture becomes a SUPPORTING mechanism for this finding's Relevance-Selection mechanism. They compose.

- **K5.** The user's correction is FILTER-flavored ("consume relevant content"). Annotation (§2.2) stays as-is — items still get a relevance label in the output. But the load-bearing primary mechanism is the FILTER at Signal Detection.

### Structural Points

- **S1.** Spec layout post-finding:
  - §3.1 Step 0 → add a sub-step that produces explicit relevance criteria (A1)
  - §2.1 Signal Detection → strengthen the "relevance" signal type to active filter (G1)
  - §5.3 Telemetry → record per-item relevance scores and the criteria used
  - §2.2 Annotation layers → stay; relevance still labels output post-read
- **S2.** Mechanism inputs: the criteria (from §3.1 sub-step) + the surfaced inventory (from Scan) → applied at Signal Detection → produces a filtered set passed to Probe.
- **S3.** Telemetry fields enable audit: `relevance_criteria` (the explicit statement); `per_item_relevance_scores` (the scoring); `filter_threshold` (the cutoff that determines read vs list-only).
- **S4.** The relationship to the prior cheap-coverage-boost: filesystem-listing's Pre-Scan Mandate (from that finding) becomes the SOURCE that produces the inventory which then gets relevance-scored here. Composition, not replacement.

### Foundational Principles

- **P1.** Match user vocabulary. "Relevant content" is the user's term; the mechanism should use "relevance" in spec-language, not coin alternatives.
- **P2.** Cross-layer minimum-sufficient. The answer composes from L1 + L2 + L5 (criteria + application + spec hygiene). Removing any one breaks the operation.
- **P3.** Demote-don't-discard. The prior finding's listing mechanism stays available; just repositioned.
- **P4.** Audit-enforced structural guarantee. Telemetry makes the mechanism observable; structural check makes the mandate enforced.

### Meaning-Nodes

- **M1.** "Relevance-judgment step" — the load-bearing operation this finding adds to /explore. Sits between Scan (which surfaces) and Probe (which reads at depth).
- **M2.** "Filter vs Annotation" — orthogonal axis. Filter gates reading; Annotation labels output. The user's correction is filter-flavored.
- **M3.** "Listing vs Consumption" — orthogonal axis. Listing surfaces existence; Consumption reads content. The prior finding addressed listing; this finding addresses consumption-gating.
- **M4.** "Relevance criteria" — the explicit statement of what counts as relevant for THIS inquiry. Derived from Question + Goal at Step 0; or author-declared; or composed.
- **M5.** "Active vs passive signal" — relevance is currently passive in §2.1 (just a signal type name). Active = computed per item, used as filter input.

---

## SV2 — Anchor-Informed Understanding

The user's question — "how does /explore identify and CONSUME relevant content?" — has a cross-layer answer:

- **At Step 0:** /explore explicitly derives relevance criteria from Question + Goal (and optionally from author-declared criteria in `_branch.md`). The criteria become a textual statement that downstream operations use.
- **At Signal Detection:** Items in the inventory are scored against the criteria (relevance becomes ACTIVELY computed). Items above threshold get passed to Probe; items below get left in the inventory as listed-but-unread.
- **In Output:** Each probed item carries its relevance score and the criterion(a) it matched. The annotation layer (§2.2 relevance) gets concrete content.
- **In Telemetry:** Criteria statement, per-item scores, and the threshold are recorded — enabling post-hoc audit of why each read happened.

This is FILTER-flavored. The prior finding's filesystem-listing mechanism is preserved as a SOURCE of inventory items (it produces the candidates that get scored).

The prior cheap-coverage-boost finding's load-bearing claim ("listing IS the answer to more coverage for sure") is CORRECTED. Listing is INPUT to relevance-selection; it doesn't substitute for it.

---

## Phase 2 — Perspective Checking

### Technical / Logical

The proposed cross-layer composition (criteria + active filter + spec hygiene) is internally consistent. Each layer's input/output is well-defined:
- L1 produces a criteria statement (markdown text)
- L2 consumes the statement + the inventory; produces a filter decision per item + per-item scores
- L5 makes the filter/annotation distinction explicit in the spec so the mechanism is placeable

No internal contradictions. The mechanism composes with the existing §2.1 Signal Detection rather than replacing it.

**New anchor:** This is a 3-piece composition across 3 layers. Each piece is small; together they are the minimum sufficient.

### Human / User

The user's correction reads as: "the prior finding missed the structural problem; the answer should be about how /explore CHOOSES content, not how /explore LISTS content." This finding's response is responsive: it adds an explicit choosing step (criteria + active filter), preserving the listing as supporting input.

The user's "simple" constraint from the prior context still applies. Three small spec changes (one Step 0 sub-step + one §2.1 strengthening + one I1 spec-hygiene note) is small. Less than the prior finding's Pre-Scan Mandate (which had four refinement targets after critique).

**New anchor:** This finding's surface area is SMALLER than the prior finding's. It's structurally cleaner because it's at the right layer.

### Strategic / Long-term

Long-term, /explore's relevance-selection is what enables autonomous selectors (L2+ autonomy per `enes/autonomy_ladder.md`) to work. Currently if /explore is invoked autonomously, it reads whatever happens to be in front of it; with explicit relevance criteria + active filter, an autonomous selector can configure /explore's relevance-criteria per inquiry. The mechanism is forward-compatible.

**New anchor:** The active-filter mechanism is the precondition for autonomous /explore at higher autonomy levels.

### Risk / Failure

Risk 1: **Relevance criteria can be wrong.** If the LLM derives bad criteria from Question + Goal, the filter excludes legitimately relevant items. Mitigation: A3 (author-declared criteria) as a complement; explicit telemetry of the criteria lets the user verify/override.

Risk 2: **The filter is too aggressive.** Threshold set too high; many relevant items get listed but unread. Mitigation: threshold should default conservative (low) such that more items get read than not; the user can tighten via configuration.

Risk 3: **Repeating the prior finding's failure mode.** Could THIS finding also be over-fixating on one mechanism family (criteria-driven)? Check via H6 (model fit): are perspectives reinforcing the criteria-driven choice or destabilizing it?

Phase 2 status so far: Technical reinforces; Human reinforces; Strategic reinforces; Risk surfaces three real risks but they're addressable. Model is settling, not patching.

### Resource / Feasibility

- A1 (Q/G-derived criteria): one new Step 0 sub-step + ~10 lines of spec. ~15 minutes.
- G1 (active §2.1 filter): strengthening of existing §2.1 wording + per-item scoring + filter threshold. ~10 lines of spec. ~15 minutes.
- I1 (filter/annotation distinction): a short paragraph clarifying the two operations. ~5 lines. ~5 minutes.
- Telemetry: 3 new fields in §5.3. ~3 minutes.

Total: ~35-45 minutes for the spec edit. Less than the prior finding's 45-60 minute estimate.

### Definitional / Internal Consistency

The existing /explore spec is internally consistent post-this-finding:
- §2.1 names relevance as a signal type → §2.1 now mandates active computation against criteria (no contradiction; strengthening of existing wording)
- §2.2 has relevance as annotation layer → stays unchanged (filter and annotation are different operations per I1)
- §3.1 Step 0 declarations → gains a new sub-step (relevance-criteria derivation) — compatible with existing Step 0 structure
- §5.3 telemetry → gains new fields — same pattern as recent prior findings

No contradictions. The mechanism extends rather than replaces.

### Definitional / Frame-exit Completeness

**Gating predicate check:** does the inquiry use multi-value inherited terms across its own committed structures? "Relevance" appears across multiple regions/layers in the exploration: as criterion (Region A), as signal (Region G), as score (Region B), as annotation (Region I). Distinct propositions. Gating fires.

- **Existence Enumeration.** "Relevance" project-wide refers to: (a) inquiry-purpose relevance (this finding's primary focus); (b) corpus-similarity relevance (per /intuit's mechanism); (c) reader-relevance (downstream consumer's relevance to their question); (d) cross-discipline relevance (e.g., what's relevant to /sense-making vs what's relevant to /innovate). Four referent types.

- **Role Assessment.** The excluded referents — are any load-bearing? Mostly no: this finding addresses inquiry-purpose relevance (the primary case). Corpus-similarity relevance is /intuit's territory (Region D in exploration; correctly scoped out as separate mechanism). Reader-relevance is downstream consumer concern. Cross-discipline relevance is broader project concern. Re-locate or note: this finding scopes to inquiry-purpose relevance; cross-references /intuit as the corpus-similarity mechanism.

- **Verdict Rigor.** No clean-boundary verdicts produced.

- **Residual.** Is there a relevance-aspect not captured? The "relevance evolves during the run" aspect (Region C multi-pass) is real but lower-priority for the minimum-sufficient ship. Note as a deferred extension.

### Phase / Calibration-State

Does the answer depend on calibration? 
- Tool availability: NO — the mechanism is LLM-internal (the LLM derives criteria, scores items, decides filter passes).
- LLM substrate: PARTIAL — better LLMs derive better criteria. Trade-off: with the explicit criteria recorded, weaker LLMs' output is at least observable/auditable.
- /intuit maturity: NO — this finding's primary mechanism doesn't depend on /intuit. /intuit could enhance the criteria-derivation step in future, but it's not a load-bearing dependency.

**New anchor:** The mechanism is mostly calibration-independent; criteria quality scales with LLM substrate, but the structural mechanism (criteria + active filter) is stable.

---

## SV3 — Multi-Perspective Understanding

The question resolves with a clear **cross-layer composition**:

- **L1 (Criteria production):** A1 — at Step 0, /explore derives an explicit relevance criteria statement from Question + Goal. Optionally extends with author-declared criteria from `_branch.md`.
- **L2 (Application):** G1 — at Signal Detection (§2.1), the "relevance" signal becomes ACTIVELY computed per item against the criteria. Items above threshold get probed (read at depth); items below get listed-but-unread.
- **L5 (Spec hygiene):** I1 — make the Filter vs Annotation distinction explicit in the spec so the active-filter (in §2.1) is correctly distinguished from the annotation (in §2.2).
- **Telemetry:** Three new fields in §5.3 — criteria statement, per-item scores, filter threshold.

H1 (separate cycle step) is OPTIONAL/COSMETIC given G1 does the work in Signal Detection. The cycle already has the step; we just activate it.

**Relationship to prior findings:**
- **CORRECTS:** prior cheap-coverage-boost finding. Specifically corrected: the load-bearing claim that "filesystem listing IS the answer to more coverage for sure." What's preserved: the listing mechanism (Pre-Scan Mandate v1) stays, repositioned as supporting INPUT to relevance-selection.
- **RELATED:** prior canonical-coverage finding. The author-declared canonical-source registry from that finding is one form of A3 (author-declared relevance criteria). They compose: registry's must-touch items get scored alongside discovered items.
- **RELATED:** prior identity-refresh finding. The kinds-of-mapping typology informs what "relevant" means for different inquiry types (layout-mapping inquiries prioritize different criteria than concept-mapping inquiries).

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Which mechanism family is the right primary answer?

**Strongest counter-interpretation:** Pick ONE family — e.g., just A1 (criteria-only); or just G1 (active-signal-only); or just E1 (force-read everything). Each family alone is a complete answer.

**Why the counter fails (structural grounds):**

1. **The exploration showed the families operate at different LAYERS.** A-family produces criteria; G-family applies them. They're not alternatives at the same layer; they're complements at different layers. Picking only A leaves the criteria unused; picking only G leaves the criteria unspecified.

2. **The prior finding's failure was single-family fixation.** The prior picked one family (Region A in this exploration's framing: source of inventory — but the prior didn't recognize that the source-of-inventory is a different layer than the relevance-judgment). Single-family fixation is the very failure mode the user corrected.

3. **The minimum-sufficient is cross-layer.** L1 + L2 + L5 (or equivalent). Removing any one breaks the operation: no criteria means nothing to filter against; no active-filter means criteria sit unused; no spec hygiene means the mechanism is mispositioned.

4. **Force-read (E1) is an alternative ARCHITECTURE, not a family at the same layer.** It bypasses relevance-judgment by reading everything. Tested elsewhere: fails the "extra context OK" constraint at scale (force-read on large territories is unbounded). Fails minimum-sufficient when the territory is large.

**Confidence:** HIGH. Cross-layer composition is structurally required; single-family fixation is the prior finding's failure mode.

**Resolution:** The answer is a cross-layer composition: A1 (L1 criteria production) + G1 (L2 application) + I1 (L5 spec hygiene). H1 is optional/cosmetic.

**What is now fixed:** The mechanism shape is cross-layer; the primary answer is criteria-driven; force-read is an alternative architecture deferred unless context-budget proves to be a non-issue.

**What is no longer allowed:** Picking one family without cross-layer thinking. Treating force-read as the primary unless the context-budget case is made.

**What now depends on this choice:** The exact criteria-derivation prompt (A1's implementation), the threshold semantics (G1's implementation), and the telemetry shape become innovation's job to materialize.

### Ambiguity 2: Filter or Annotation?

**Strongest counter-interpretation:** Annotation is the primary answer. /explore should label each item with a relevance score in the output; downstream consumers (or the human) filter based on the annotation.

**Why the counter fails (structural grounds):**

1. **The user's correction is explicitly about CONSUMPTION.** "Listing file names doesn't mean content will be consumed." Annotation labels items AFTER they're surfaced/read; the user is asking about what gets read in the first place. That's FILTER.

2. **Annotation doesn't gate reading.** /explore would still read everything (or randomly sample) and then label. The user's concern is that random-sampling produces missed-relevant-content; labeling after the fact doesn't fix this.

3. **The mechanism that DOES address consumption-of-relevant is the filter at the read-gating step.** That's G1 (active §2.1 signal). Annotation (§2.2) stays as a complement — items still get scored in the output — but the load-bearing mechanism for "what gets consumed" is the filter.

**Confidence:** HIGH.

**Resolution:** FILTER-primary. Active filter at Signal Detection gates reading. Annotation stays as an output layer; items get a relevance score in the output regardless of whether they were probed (probed items get verified scores; non-probed items get provisional scores).

**What is now fixed:** Filter is the primary; annotation is the complement.

**What is no longer allowed:** Calling annotation the answer; conflating the two operations (which is what I1's spec hygiene prevents).

### Ambiguity 3: Relationship to the prior cheap-coverage-boost finding

**Strongest counter-interpretation:** The prior finding should be SUPERSEDED — its load-bearing claim was wrong, its architecture is replaced.

**Why the counter fails (structural grounds):**

1. **The filesystem-listing mechanism itself isn't wrong.** It IS a useful supporting mechanism — it produces the inventory that feeds the relevance-selection step. Without listing, there's no inventory to filter against (for filesystem-mappable artifact territories).

2. **What's wrong is the CLAIM that listing alone is "the answer to more coverage for sure."** The user's correction specifically targets the CLAIM, not the mechanism. SUPERSEDES would imply throwing out the mechanism; CORRECTS preserves the mechanism while correcting the claim about its role.

3. **The prior finding's Pre-Scan Mandate v1 architecture works fine as a SUPPORTING mechanism.** Demoted from "the answer" to "supporting input to relevance-selection." Architecture preserved; role repositioned.

**Confidence:** HIGH.

**Resolution:** CORRECTS, not SUPERSEDES. What's corrected: the load-bearing claim. What's preserved: the listing mechanism, repositioned as input.

### Load-bearing concept tests (Phase 3 refinement)

#### Test: "Relevance"

- User-language: ✓ The user used "relevant" directly.
- Proxy-vs-structural: Does "relevance" represent a real structural distinction? YES — it's distinct from existence (listing), from confidence (scanned/probed/confirmed), and from purpose (the inquiry's question). Real referent.
- Discoverability: Has the determination been specified? Partially — criteria-derivation is the mechanism. The specific prompt/heuristic for deriving criteria is innovation's job to specify.

#### Test: "Filter"

- User-language: implicit — the user said "choose relevant content," which is filter-shaped action.
- Proxy-vs-structural: distinct from annotation; distinct from confidence; distinct from probe-decision. Real structural distinction.
- Discoverability: filter is applied at Signal Detection with criteria as input.

### Specific-vs-pattern check

The user's correction is pattern-level ("listing is just one example; the real problem is relevance-selection"). The answer is pattern-level (criteria-driven filter mechanism, not specific to filesystem territories).

**Pattern-level ✓**

---

## SV4 — Clarified Understanding

The shippable answer is: **`/explore` gains an explicit, criteria-driven, active-filter relevance-selection step.** The step composes three small spec changes:

1. **Step 0 (§3.1) sub-step:** Derive explicit relevance criteria from `_branch.md`'s Question + Goal (and optionally from author-declared criteria). The criteria become a markdown statement available to downstream operations.

2. **Signal Detection (§2.1) strengthening:** Activate the existing "relevance" signal type. Each surfaced item gets scored against the criteria. Items above threshold get passed to Probe (read at depth); items below remain in the inventory listed-but-unread. The relevance scores are recorded per item.

3. **Spec hygiene (§2.1/§2.2 distinction):** Make the Filter (gating reads at §2.1) vs Annotation (labeling output at §2.2) distinction explicit so future readers/maintainers don't conflate them.

**Telemetry:** New fields in §5.3 — `relevance_criteria` (the statement), `per_item_relevance_scores` (per-item), `filter_threshold` (the cutoff).

**Relationship to prior findings:**
- CORRECTS the prior cheap-coverage-boost finding's load-bearing claim ("listing is the answer"); preserves its filesystem-listing mechanism as supporting input
- RELATED to the canonical-coverage finding (registry is one form of A3 author-declared criteria; compose)
- RELATED to the identity-refresh finding (criteria differ per inquiry-type per the kinds-of-mapping typology)

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

- The answer is a CROSS-LAYER composition (L1 criteria + L2 application + L5 spec hygiene). Single-family fixation is the prior finding's failure; rejected here.
- The answer is FILTER-primary. Annotation is the complement, not the answer.
- The prior cheap-coverage-boost finding is CORRECTS (claim corrected, mechanism preserved-repositioned), not SUPERSEDES.
- A1 (Q/G-derived criteria) is the primary L1 mechanism; A3 (author-declared) is the optional extension.
- G1 (active §2.1 signal) is the L2 application mechanism.
- I1 (filter/annotation spec hygiene) is the L5 prerequisite.
- H1 (new cycle step) is optional/cosmetic given G1.

### Eliminated

- Single-family fixation (any single A, B, C, D, E, F, G, or H alone)
- Annotation-primary framing (fails user's correction about consumption)
- SUPERSEDES relationship to prior finding (the mechanism itself is preserved)
- Force-read (E1) as primary (fails minimum-sufficient and context-budget at scale)
- /intuit (D1) as primary (Phase A maturity; not load-bearing here)

### Viable

- **Path A (recommended):** Ship A1 + G1 + I1 with telemetry. The minimum sufficient cross-layer composition. ~35-45 min spec work.
- **Path B (extension):** Add A3 (author-declared criteria) as a compatible extension; can ship together or as follow-on. ~10 extra min.
- **Path C (follow-on, deferred):** Multi-pass refinement (C1) as iterative quality improvement once Path A has run for several inquiries.

---

## SV5 — Constrained Understanding

The solution space contracts to ONE primary cross-layer composition + ONE optional extension + several deferred items. The primary composition is structurally required (each layer is necessary); the optional extension is compatible if the user wants more author control. Force-read, /intuit-embedded, decompose-the-territory, and other Region candidates are deferred with explicit triggers.

---

## Phase 5 — Conceptual Stabilization

**Accommodation trigger check:** Did multiple perspectives destabilize the model? No. Technical, Human, Strategic, Risk, Resource, Definitional, Frame-exit, and Phase/Calibration-State all reinforced cross-layer criteria-driven filter as the right answer. Model is settling, not patching. No reset to Phase 2.

**Self-reference blindness check (H8):** Sensemaking is itself doing relevance-selection in choosing which mechanism to recommend. External grounding: the user's correction is observable (they explicitly named the failure mode); the prior finding's failure is observable (its load-bearing claim was wrong). Both external anchors prevent self-reference collapse.

**Model-fit check (H6):** No oscillation; model settled at SV3 with refinements at SV4-SV5 that added structure (telemetry; deferred items list) without changing the load-bearing claims.

---

## SV6 — Stabilized Model

The user's correction to the prior cheap-coverage-boost finding revealed the right structural problem: **`/explore`'s missing operation is an explicit relevance-judgment step that decides what gets consumed, not what gets listed.** This finding's answer is a small cross-layer composition that adds that step.

**The shippable mechanism:**

- **At Step 0 of every `/explore` run:** the discipline derives an explicit relevance-criteria statement from the inquiry's Question + Goal (per `_branch.md`). The statement is a markdown paragraph that names what counts as relevant for THIS inquiry — concepts to look for, kinds of items to prioritize, kinds to deprioritize. Optionally, author-declared criteria in `_branch.md` are merged in.

- **At Signal Detection (§2.1):** the existing "relevance" signal type becomes ACTIVELY computed. Each surfaced inventory item gets scored against the criteria (HIGH / MEDIUM / LOW or 0-1). Items at or above a threshold get passed to Probe (read at depth); items below the threshold stay in the inventory listed-but-unread. The threshold defaults conservative (more reads than skips) but is configurable.

- **In the output (§2.2 annotation):** every item carries its relevance score regardless of whether it was probed (probed items get verified scores from content; non-probed items get provisional scores from metadata).

- **Spec hygiene addition (clarifying §2.1/§2.2):** an explicit distinction in the spec between Filter (gates which items get read; lives at §2.1) and Annotation (labels items in the output; lives at §2.2). Same word "relevance" appears in both, but they're different operations. The distinction prevents the conflation the prior finding fell into.

- **Telemetry (§5.3):** three new fields — `relevance_criteria` (the statement); `per_item_relevance_scores` (the scoring); `filter_threshold` (the cutoff applied).

**Relationship to prior findings:**

- **CORRECTS** the prior cheap-coverage-boost finding at `devdocs/inquiries/2026-05-13_07-39__cheap_coverage_boost_for_explore_now/finding.md`. What's corrected: the load-bearing claim that "mandatory filesystem listing IS the answer to more coverage for sure." Listing alone doesn't ensure consumption of relevant content. What's preserved: the Pre-Scan Mandate v1 architecture remains usable — repositioned from "the answer" to "supporting input that produces the inventory that this finding's relevance-selection step filters."

- **RELATED** to the canonical-coverage finding at `devdocs/inquiries/2026-05-13_06-30__explore_canonical_coverage_via_staged_iteration/finding.md`. Its canonical-source registry is one specific case of author-declared relevance criteria (must-touch sources are HIGH-relevance by definition). The two mechanisms compose: registry items are scored as HIGH-relevance automatically and pass the filter without further judgment.

- **RELATED** to the identity-refresh finding at `devdocs/inquiries/2026-05-13_07-16__is_mapping_required_core_of_explore/finding.md`. The kinds-of-mapping typology helps `/explore` derive different criteria for different inquiry types (layout-mapping inquiries prioritize different items than concept-mapping inquiries). Criteria-derivation can be inquiry-type-keyed using that typology.

**How SV6 differs from SV1:**
- SV1 saw 17 candidates without clear primary.
- SV6 commits to a specific cross-layer composition (A1 + G1 + I1 + telemetry), names the family-selection decision (criteria-driven, not force-read), specifies the filter-not-annotation framing, declares the CORRECTS relationship to the prior finding while preserving its mechanism, and surfaces inquiry-type-keyed criteria as a future refinement.

---

## Saturation Indicators

- **Perspective saturation:** 8 perspectives ran. Last several (Definitional/Frame-exit, Phase/Calibration-State) added structure (inquiry-purpose relevance is the scope; corpus-similarity is /intuit's territory) without contradiction. Saturating.
- **Ambiguity resolution:** 3/3 named ambiguities resolved at HIGH confidence. Load-bearing concept tests passed on "relevance" and "filter."
- **SV delta:** SV1 → SV6 went from "17 candidates, no primary" → "cross-layer composition with explicit family-selection rationale, filter-primary framing, CORRECTS relationship to prior, inquiry-type-keyed extension noted." Substantial.
- **Anchor diversity:** All 5 anchor types present.

---

## Failure-Mode Check

- **Status Quo Bias:** Did I defend the existing /explore spec? Partially — the recommendation STRENGTHENS §2.1's existing "relevance" signal rather than replacing it. But the strengthening is structurally justified (the existing spec mentions relevance but doesn't operationalize it; activating it is improvement, not defense). Not status quo bias.
- **Premature Stabilization:** Did clarity arrive too early? The cross-layer insight came at K1 (early in Phase 1), but SV3-SV6 added significant structure (CORRECTS relationship; inquiry-type-keyed criteria; telemetry; force-read as deferred). Early clarity was real.
- **Anchor Dominance:** Did one anchor carry the work? The cross-layer-composition anchor (K1+K2) is dominant. Test: if removed, would the answer collapse? Yes — without recognizing the layer-distinction, the prior finding's failure repeats. But the anchor is structurally observable (the families really do operate at different layers); dominance is earned.
- **Perspective Blindness:** Did all perspectives agree? Mostly yes, but Risk surfaced three real concerns (criteria-can-be-wrong; filter-too-aggressive; repeating-fixation). All adjudicated.
- **Clean Resolution Trap:** Did the resolution feel too clean? The cross-layer composition is clean. Strongest counter: maybe the user actually wanted something simpler (one mechanism, not three). Test on structural grounds: three is minimum sufficient given the failure mode of single-family fixation. The cleanness is earned.
- **Self-Reference Blindness (H8):** Sensemaking choosing relevance-selection. External grounding via user's correction + prior finding's observable failure.

---

## Self-Assessment

**Overall: PROCEED.** Eight perspectives ran with Definitional/Frame-exit and Phase/Calibration-State both firing. Three ambiguities resolved at HIGH confidence. Load-bearing concept tests passed on "relevance" and "filter." Meta-Inspection hooks H1 (candidate families do partition by layer, not collapse), H3 (filter-vs-annotation framing question identified and resolved as filter-primary), H6 (model fit stable; no oscillation), H8 (self-reference grounded externally) all applied. Relationship to prior findings determined: CORRECTS (prior cheap-coverage-boost), RELATED (canonical-coverage, identity-refresh).

SV delta substantial. No failure modes firing. Downstream consumers (decompose, innovate, critique) should treat A1 + G1 + I1 + telemetry as the primary actionable composition, A3 (author-declared criteria) as the optional extension, and C1/D1/E1/F2/J1 as deferred-with-triggers.
