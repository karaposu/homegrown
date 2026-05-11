---
status: active
analyzes:
  - devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility/finding.md
  - devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search/finding.md
related:
  - devdocs/inquiries/2026-05-06_13-19__navigation_correction_chain_failure_inventory/finding.md
impacts:
  - homegrown/sense-making/references/sensemaking.md
  - homegrown/explore/references/explore.md
  - homegrown/td-critique/references/td-critique.md
  - devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility/finding.md
---

# Finding: Loop Diagnose - Past Navigation Memory Index Vs Search

## Question

If a maintained `PastNavigationMemoryFile Index` was recommended on 2026-05-06 morning (the **prior inquiry**), then withdrawn three hours later in favor of a `PastNavigationMemoryFile Discovery Search` contract (the **corrected inquiry**) after the user pushed back with "but why do we need index if we can simply search the codebase," what did the prior loop likely miss, why did it miss it, and what narrow maintenance candidates follow? *(LOOP_DIAGNOSE on this correction chain.)*

The goal was to identify evidence-backed failure hypotheses with confidence levels, name affected discipline or framing stages, classify shortcoming types, and produce maintenance candidates with explicit evaluation gates — without claiming exact root cause when evidence is weak. Three diagnostic concerns were specifically named: did Exploration under-test the known filename/path search alternative; did Sensemaking overvalue Homegrown explicitness as a maintained artifact; did Critique let a duplicate mutable-state source survive? *(Homegrown is the methodology library this repository ships; the seven thinking disciplines and the MVL+ runner together produce the inquiry artifacts being analyzed.)*

## Finding Summary

- The prior loop's failure was **mechanism prioritization**, not content-level wrongness. The prior recommended a maintained Markdown file (`devdocs/navigation_context/past_navigation_memory_file_index.md`) when a documented active-tree search contract would have served the same discovery need without creating a second mutable truth source.

- Four primary failure hypotheses are confirmed at HIGH or MEDIUM-HIGH confidence. Each maps to one process-level shortcoming visible in the prior's discipline outputs:

  - **Hypothesis A (Exploration probe gap, HIGH).** The prior Exploration named "generated-on-demand scan report" as a candidate at scan resolution but never ran the empirical probe. The "discovery cost every run" objection was qualitative, never measured. The corrected Exploration ran the probe in Cycle 2 and showed the cost is one match across one pattern set on roughly 184 active markdown files — trivial.

  - **Hypothesis B (Sensemaking explicitness anchor, HIGH).** The prior Sensemaking stated "Homegrown values explicit durable Markdown artifacts" as a Phase 1 / Constraints item without interrogating it. None of the four Phase 3 ambiguity-collapse pairs tested whether explicitness could be carried by a documented procedure instead of a maintained file. The corrected Sensemaking SV1 names the missed reframe word-for-word: *"explicit artifact or no explicit artifact"* was the wrong question; *"a maintained list or a documented search contract"* was the right one.

  - **Hypothesis C (Critique dimension blindness, HIGH).** The prior Critique's six dimensions covered content (Authority Separation handled "no route-disposition fields") and remediation (Robustness Against Staleness handled "stale entries can be repaired") but no dimension named **mechanism-level redundancy** — the structural risk that a maintained index duplicates state derivable from the filesystem. The corrected Critique made this exact axis primary: Stale-State Resistance is operationalized as "does not create a second mutable truth source that can silently drift."

  - **Hypothesis D (Loop framing, MEDIUM-HIGH).** The prior `_branch.md` Goal listed seven sub-clauses — six about index design ("what it must contain, when entries are added, who updates it...") and one about index need ("worth adding"). This 6:1 ratio pre-encoded "we are designing an index" as the corridor every downstream discipline reasoned inside. The user's prompt asked "easier and feasible" without naming a comparator; the prior loop resolved "easier than what?" implicitly as "easier than ad hoc rediscovery" without testing that against alternatives.

- Two additional propagation hypotheses sit downstream of B at MEDIUM confidence: the prior Decomposition's question tree (Q1 = "What counts as an index entry?") presupposed the artifact, and the prior Innovation generated six candidate designs without the documented-search synthesis the user later supplied.

- The cascade structure is **upstream-downstream with two upstream sources** (D framing + B anchor) → Decomposition Q-tree → Innovation candidate set → C dimension list. Exploration's probe gap (A) sits in parallel, not strictly downstream — its evidence is independent.

- Critique is **partly independently culpable**. Even with the prior's truncated candidate set, a Critique whose dimensions named "duplicate-derivable-state" would have flagged the surviving Candidate E because its "scan/backfill required for safety" property fails such a dimension regardless of which other candidates were considered.

- Five maintenance candidates survive as ACTIONABLE: anchor-interrogation prompt at Sensemaking (M1), probe-before-stabilization rule at Exploration (M2), duplicate-derivable-state dimension at Critique (M3), reciprocal supersession annotation on the prior `finding.md` (M7, content cleanup), and a 3-run monitoring baseline (M8, the gate that promotes deferred candidates). Four candidates are deferred behind concrete revival triggers: Goal-clause balance check (M4), comparator surfacing (M5), cross-cutting "name-and-test load-bearing anchors" pattern (M6), and a one-time canary test (M9).

- The diagnostic verdict is **ACTIONABLE-PARTIAL**. The five surviving candidates have concrete near-term gates and target the upstream-parallel-downstream cascade with redundant coverage. The "PARTIAL" qualifier honors LOOP_DIAGNOSE's Step 5 guardrail: one correction chain does not justify broad rewrites, and the corrected loop is comparative evidence, not ground truth (the corrected finding itself preserves the maintained index as deferred behind concrete revival triggers).

## Finding

### Context (why this diagnosis matters)

Homegrown's MVL+ runner chains five thinking disciplines on every question — Exploration, Sensemaking, Decomposition, Innovation, Critique — and produces a `finding.md` per inquiry. When a finding is later corrected by the user, the correction chain is a structural opportunity: the prior loop produced a specific recommendation, the user signaled what was wrong with it, and a later loop produced a different recommendation. LOOP_DIAGNOSE (the protocol at `homegrown/protocols/loop_diagnose.md`) frames an MVL+ inquiry whose purpose is to compare those three artifacts and infer where the prior loop's reasoning specifically broke. The diagnostic output is intended to feed narrow maintenance candidates — small protocol patches that prevent recurrence of the specific failure pattern.

This is the first LOOP_DIAGNOSE run on a real correction chain. The upstream `2026-05-06_13-19__navigation_correction_chain_failure_inventory` inquiry inventoried the navigation correction-chain failures and prepared seven ready-to-run LOOP_DIAGNOSE prompts; the prompt the user invoked here is that inventory's Prompt 1 (the index-vs-search edge), which the inventory ranked first because it is "the cleanest correction edge" (the corrected inquiry directly corrects the maintained-index recommendation).

### Correction Chain Summary

- **Prior path:** `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility/`
- **Corrected path:** `devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search/`
- **Human correction (verbatim):** *"$MVL+ — but why do we need index if we can simply search the codebase and find all files... we know the file names afterall, at least regex searchable way we know."*
- **What changed:** the prior recommended creating a maintained Markdown registry at `devdocs/navigation_context/past_navigation_memory_file_index.md` with creation-time registration plus scan/backfill fallback. The corrected recommended a protocol-level operation called `PastNavigationMemoryFile Discovery Search` with documented patterns and exclusions, plus an optional run-local `past_navigation_memory_candidates.md` only when durable handoff matters. The maintained index is preserved as deferred behind concrete revival triggers.

### Failure Hypotheses

#### Hypothesis A: Exploration Probe Gap

**Affected stage:** Exploration.

**Shortcoming type:** Possibility-mode candidate listed at scan resolution but never probed empirically. The "discovery cost every run" weakness was asserted qualitatively without measurement.

**Evidence from prior inquiry:** The prior `docarchive/exploration.md` Cycle 5 ("Possibility Scan For Index Shapes") names "Generated-on-demand scan report with no durable index" as a candidate, then dispatches it with a single sentence: *"A generated-on-demand report avoids stale manual bookkeeping but still has discovery cost every run."* No probe is run. The same exploration's Cycle 4 reports that the active candidate count is exactly one (`devdocs/navigation/next_load_bearing_after_navigation_warmup.md`) — the data that would have refuted the cost objection sat unused in an adjacent cycle.

**Evidence from human correction:** The user's "we know the file names afterall, at least regex searchable way we know" is precisely the evidence the missing probe would have surfaced — that filenames are protocol-defined and search is mechanically sufficient.

**Evidence from corrected inquiry:** The corrected `docarchive/exploration.md` Cycle 2 ("Test Filename Search In The Active Tree") executes the probe with explicit patterns (`devdocs/navigation/**/*.md`, `**/navigation.md`, `**/_frontier.md`, `**/route_memory_review.md`, `**/prior_map_overlay.md`, `**/sync_brief.md`) and reports the result: one candidate file across roughly 184 active markdown files. Cycle 3 then tests the search's failure modes (loose regex matches `homegrown/navigation/references/navigation.md` as a false positive), establishing that scoped search is mechanically sufficient.

**Confidence:** HIGH. Multiple artifacts converge: prior Cycle 5 named-but-did-not-probe; prior Cycle 4 had the data the probe would have used; corrected Cycle 2 ran the missing probe.

**Why not stronger:** Even with the probe run, the Sensemaking anchor (Hypothesis B) would have routed cheap-cost into "search is fine as a fallback" rather than "search is the primary mechanism." So A is necessary but not sufficient on its own.

**Maintenance candidate:** Add a one-paragraph rule to `homegrown/explore/references/explore.md` (Possibility Mode section): when possibility-mode candidates are listed at scan resolution and one of them has a quantifiable cost or benefit, run at least one empirical probe of that candidate before stabilizing the candidate set. Listing without probing is a Surface-Only Scanning signal in possibility mode.

**Evaluation gate:** in the next 3 possibility-mode Exploration runs that list a candidate with quantifiable cost or benefit, at least one empirical probe is executed before the Confidence Map stabilizes. If zero of three runs produce probes, downgrade to monitoring.

#### Hypothesis B: Sensemaking Explicitness Anchor

**Affected stage:** Sensemaking.

**Shortcoming type:** Anchor stated as a constraint without interrogation. A property of the domain ("Homegrown values explicit durable Markdown artifacts") was treated as fixed, with no Phase 3 ambiguity-collapse pair testing whether the property could be carried by a different mechanism. This is the **Premature Stabilization** failure mode (named in `homegrown/sense-making/references/sensemaking.md`) applied to the form of the answer rather than to the model itself.

**Evidence from prior inquiry:** The prior `docarchive/sensemaking.md` Phase 1 / Constraints lists *"Homegrown values explicit durable Markdown artifacts"* as item 6, and Phase 1 / Foundational Principles lists *"Indexes are pointers/discovery aids unless explicitly designed as authoritative ledgers."* Both are treated as fixed. Phase 3 contains four ambiguity-collapse pairs (what is being indexed, does the index replace review, is it feasible against staleness, where does it live) — none of which tests whether the explicitness property requires a maintained file or could be carried by a documented procedure. SV6 ratifies "narrow discovery registry" as the answer.

**Evidence from human correction:** The user's "we know the file names" is a structural challenge to the form anchor — it asserts that explicitness is already present in the existing filesystem-and-protocol surface, so a new maintained artifact is not what explicitness requires.

**Evidence from corrected inquiry:** The corrected `docarchive/sensemaking.md` SV1 names the missed reframe explicitly: *"The question is not 'explicit artifact or no explicit artifact.' The real question is whether explicitness should live in a maintained list or in a documented search contract."* Phase 1 / Foundational Principles in the corrected inquiry adds: *"Explicitness means the mechanism is inspectable, not necessarily that every derived result has a permanent global file."* Phase 3 Ambiguity 2 in the corrected inquiry runs the test the prior never ran: *"Is search less explicit than an index?"* — and resolves it on structural grounds.

**Confidence:** HIGH. The missing reframe is named word-for-word in the corrected SV1 and is structurally absent from the prior's Phase 3.

**Why not stronger:** Propagation effects (the prior's Decomposition Q-tree and Innovation candidate set) are partly inherited from B; isolating B independently from D (loop framing) is not fully clean — the framing corridor and the anchor are correlated.

**Maintenance candidate:** Add a one-paragraph rule to `homegrown/sense-making/references/sensemaking.md` Phase 1 (Cognitive Anchor Extraction): for each Phase 1 / Constraints item phrased as a fixed property of the domain (e.g., *"X values explicit Y"* or *"X is Z"*), generate at least one Phase 3 ambiguity-collapse pair that tests whether the property could be carried by a different mechanism. Failing to produce such a pair is a Premature Stabilization signal.

**Evaluation gate:** in the next 3 MVL+ runs that engage Sensemaking, at least one Phase 3 ambiguity-collapse entry should target a Phase 1 / Constraints item phrased as a domain property. If zero of three runs produce such entries, downgrade to monitoring.

#### Hypothesis C: Critique Dimension Blindness

**Affected stage:** Critique. **Attribution:** mixed (partly independent dimension articulation, partly inherited candidate set from Innovation).

**Shortcoming type:** Wrong dimensions (the prior critique's failure mode at `homegrown/td-critique/references/td-critique.md` Section 1). The dimension list lacked an axis for **mechanism-level redundancy** — the structural risk that a candidate creates state derivable from existing data. Authority Separation (25% weight) covered field-level content. Robustness Against Staleness (15% weight) covered repair. Neither covered prevention of duplicate state.

**Evidence from prior inquiry:** The prior `docarchive/critique.md` lists six dimensions (Scope Correctness 20%, Authority Separation 25%, Discovery Usefulness 15%, Feasibility And Update Ownership 20%, Robustness Against Staleness 15%, Rollout Coherence 5%). The Authority Separation dimension is operationalized as *"the candidate cannot be mistaken for current route truth"* — about field content, not about the existence of a separate registry. The "scan/backfill required for safety" property of Candidate E (the prior survivor) is scored as a strength under Robustness Against Staleness; under a duplicate-derivable-state dimension it would have been scored as evidence of redundancy (if scan is required for safety, the index is supplementary, not load-bearing).

**Evidence from human correction:** The user's challenge is mechanism-level: "if we can simply search... we know the file names." The user is naming the redundancy directly.

**Evidence from corrected inquiry:** The corrected `docarchive/critique.md` reorganizes dimensions: Discovery Correctness 25%, Explicitness 20%, **Stale-State Resistance 25%**, Operational Feasibility 15%, Route Memory Boundary 15%. Stale-State Resistance is operationalized verbatim as *"does not create a second mutable truth source that can silently drift."* The corrected Candidate A prosecution states the redundancy directly: *"duplicates a result that can be derived from known filenames and paths."*

**Confidence:** HIGH for the dimension articulation shortcoming. The dimension list is observable in both critiques; the corrected dimension is exactly the missing axis under a different name.

**Why not stronger:** Critique's verdict is partly downstream of Innovation — the prior's candidate set lacked the documented-search synthesis (Hypothesis Innovation, MEDIUM), so even a Critique with the missing dimension might have flagged Candidate E for refinement rather than killing it outright. The independent component is the dimension list; the inherited component is the candidate set.

**Maintenance candidate:** Add a one-paragraph rule to `homegrown/td-critique/references/td-critique.md` (Dimensions With Weights section): when evaluating candidates that produce or maintain durable state, include a duplicate-derivable-state (or minimum-state preservation) dimension that asks whether the candidate creates state derivable from existing data. The "scan/backfill required for safety" pattern in any candidate is a STRONG signal for this dimension.

**Evaluation gate:** in the next 3 Critique runs evaluating state-producing candidates, the duplicate-derivable-state (or equivalent) dimension appears in the Dimensions With Weights section with non-trivial weight. If zero of three runs include the dimension, downgrade to monitoring.

#### Hypothesis D: Loop Framing — Goal Clause Distribution

**Affected stage:** loop framing (per LOOP_DIAGNOSE Step 4 taxonomy). **Corrective surface:** MVL+'s `_branch.md` Goal-construction step at ROOT NEW, plus context elicitation (no comparator surfacing for "easier" phrasing).

**Shortcoming type:** Pre-encoded design corridor. The Goal section listed six sub-clauses about how to design the index against one sub-clause about whether to add it; this distribution biased the corridor every downstream discipline reasoned inside.

**Evidence from prior inquiry:** The prior `_branch.md` Goal: *"decide whether a `PastNavigationMemoryFile` index is worth adding, what problem it solves, what it must contain, when entries are added, who updates it, whether it is feasible without becoming stale manual bookkeeping, and whether it should replace or merely assist Route Memory Review discovery."* Six of seven clauses are design questions about the index; only one ("worth adding") is the should-it-exist question. The prior `finding.md` Reasoning section makes the implicit comparator explicit: *"The user's easier-index instinct survived. A known registry is easier than repeatedly rediscovering route-memory files..."* — confirming that "easier than" was resolved as "easier than ad hoc rediscovery" without testing.

**Evidence from human correction:** The user's later-supplied comparator ("simply search the codebase") is the missing baseline.

**Evidence from corrected inquiry:** The corrected `_branch.md` Question reframes around the comparator: *"If Homegrown can find PastNavigationMemoryFile candidates by searching known filenames and patterns, does it still need a maintained PastNavigationMemoryFile index?"* The corrected finding's Open Questions / Refinement Triggers include explicit revival triggers for the maintained index, framing the verdict as bounded ambiguity rather than a final answer.

**Confidence:** MEDIUM-HIGH. Goal-clause distribution is observable; the causal claim "framing biased Sensemaking" is one inferential step (Sensemaking could in principle have re-interrogated the Goal during anchor extraction).

**Why not stronger:** Two open paths reduce confidence. First, Goal-clause distribution is correlated with the user's own prompt ("isnt this more easy?"), so attribution between user-input shape and runner-construction shape is not fully separable. Second, single-chain heuristic thresholds (the 6:1 ratio observed here) cannot be elevated to general rules.

**Maintenance candidate:** The runner-level patches (Goal-clause balance check at MVL+ ROOT NEW; comparator-surfacing at Scope Check) are deferred behind concrete revival triggers. The single-chain evidence is too thin to justify a runner-level warning that fires on every ROOT NEW.

**Evaluation gate (deferred):** revive when another correction chain shows a similar Goal-clause imbalance (≥ 4:1 design-clause:need-clause ratio) AND the imbalance is causally linked to a downstream cascade.

#### Propagation Hypotheses (Decomposition + Innovation)

These two stages amplified the upstream B anchor; their independent culpability is small but their evidence is observable in the artifacts.

- **Decomposition Q-tree presupposed the artifact (MEDIUM).** The prior `docarchive/decomposition.md` Question Tree starts with Q1 = *"What Counts As A PastNavigationMemoryFile Index Entry?"* All seven questions presuppose the index exists. There is no "Should the index exist at all?" question. This is downstream of B: once Sensemaking handed Decomposition the form-of-the-answer corridor, the question tree could not interrogate the form. The corrected Decomposition's Q5 is the corresponding interrogation: *"When Would A Maintained Index Become Justified?"*

- **Innovation candidate set lacked the documented-search synthesis (MEDIUM).** The prior `docarchive/innovation.md` generates six candidates: A = "No Index, Scan Each Time" (informal), B = "Global PastNavigationMemoryFile Index", C = "Append-Only Creation Event Log", D = "Per-File Metadata Only", E = "Hybrid Registry Plus Scan Refresh" (the survivor), F = "Route Memory Review Consumed-Set Only". The structurally critical seventh candidate — "No Index, Documented Search Contract" — is absent. The prior's Inversion mechanism produced *"Instead of 'find old Navigation memory before review,' make every Navigation memory artifact declare itself"* (front-matter markers, not search). The corrected Innovation's Inversion produced the missing synthesis: *"Instead of 'create an index so we do not search,' search so we do not create an index."*

The propagation hypotheses do not require independent maintenance candidates: if M1 (the upstream Sensemaking patch) succeeds, the corridor that produced these amplifications is itself prevented.

### Failure Attribution Summary

| Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
|---|---|---:|---:|---|
| Exploration | Possibility-mode candidate listed but not empirically probed | strong | HIGH | M2 — probe-before-stabilization rule in `explore.md` |
| Sensemaking | Anchor stated as constraint without Phase 3 interrogation (Premature Stabilization on form-of-answer) | strong | HIGH | M1 — anchor-interrogation prompt in `sensemaking.md` |
| Critique | Dimension list lacks duplicate-derivable-state risk axis (Wrong Dimensions) | strong | HIGH | M3 — duplicate-derivable-state dimension in `td-critique.md` |
| Loop framing | Goal pre-encoded design corridor (6:1 design-to-need clauses); no comparator surfaced for "easier" | medium | MEDIUM-HIGH | M4 / M5 — deferred behind revival triggers |
| Decomposition | Q-tree presupposed the artifact | medium (largely inherited from B) | MEDIUM | covered by M1 |
| Innovation | Candidate set missing documented-search synthesis | medium (largely inherited from B) | MEDIUM | covered by M1 |
| Context elicitation | Runner did not surface "easier than what?" before Scope Check | weak | LOW | M5 — deferred |
| CONCLUDE | (considered) faithful synthesis of upstream output | n/a | n/a (not implicated) | none |

The dominant cascade path is: D (loop framing) and B (Sensemaking anchor) → Decomposition Q-tree presupposition → Innovation candidate set blindness → C (Critique dimension blindness ratifies Candidate E). A (Exploration probe gap) sits in parallel with its own evidence trail, not strictly downstream. CONCLUDE is not implicated — it compiled the discipline outputs faithfully; the framing-level shortcoming sits earlier in the pipeline.

## Next Actions

### MUST

- **What:** Add a one-paragraph anchor-interrogation rule to `homegrown/sense-making/references/sensemaking.md` Phase 1 (Cognitive Anchor Extraction). For each Phase 1 / Constraints item phrased as a fixed property of the domain, require at least one Phase 3 ambiguity-collapse pair that tests whether the property could be carried by a different mechanism. Failing to produce such a pair is a Premature Stabilization signal.
  **Who:** Sensemaking discipline maintainer. (M1)
  **Gate:** observable — in the next 3 MVL+ runs engaging Sensemaking, at least one Phase 3 entry targets a Phase 1 / Constraints item phrased as a domain property. If zero of three runs produce such entries, downgrade to monitoring.
  **Why:** Targets Hypothesis B at the upstream cascade origin. Prevents recurrence of the explicitness-as-artifact failure pattern. Lowest-cost source edit with the highest leverage; multiple downstream effects (Decomposition Q-tree, Innovation candidate set) are inherited from this anchor and would also be prevented.

- **What:** Add a one-paragraph probe-before-stabilization rule to `homegrown/explore/references/explore.md` (Possibility Mode section). When possibility-mode candidates are listed at scan resolution and one has a quantifiable cost or benefit, run at least one empirical probe before stabilizing the candidate set.
  **Who:** Exploration discipline maintainer. (M2)
  **Gate:** observable — in the next 3 possibility-mode Exploration runs that list a candidate with quantifiable cost or benefit, at least one empirical probe is executed before the Confidence Map stabilizes.
  **Why:** Targets Hypothesis A. Catches the parallel Exploration shortcoming whether or not the upstream Sensemaking patch (M1) triggers. Empirical probes in possibility mode are cheap (the corrected loop's Cycle 2 was one filename search).

- **What:** Add a one-paragraph rule to `homegrown/td-critique/references/td-critique.md` (Dimensions With Weights section) requiring a duplicate-derivable-state (or minimum-state preservation) dimension when candidates produce or maintain durable state. Note: "scan/backfill required for safety" is a STRONG signal for this dimension.
  **Who:** Critique discipline maintainer. (M3)
  **Gate:** observable — in the next 3 Critique runs evaluating state-producing candidates, the duplicate-derivable-state dimension appears in the Dimensions With Weights section with non-trivial weight.
  **Why:** Targets Hypothesis C at the downstream detective layer. Catches mechanism-level redundancy regardless of whether upstream patches (M1, M2) trigger. Reuses an existing required surface (the dimension list) without adding new structure.

- **What:** Annotate the prior `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility/finding.md` with reciprocal supersession: add `corrected_by: devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search/finding.md` to the frontmatter, and add a top-level Status note at the start of the body indicating that the primary recommendation has been corrected and pointing at the corrected inquiry.
  **Who:** Inquiry maintainer (single-edit content cleanup). (M7)
  **Gate:** verifiable by single read after the edit lands.
  **Why:** Prevents a future runner reading the prior in isolation from executing the obsolete recommendation (creating `devdocs/navigation_context/past_navigation_memory_file_index.md`). The corrected finding already has `corrects:` pointing at the prior; this completes the reciprocal link.

- **What:** Monitor the next 3 normal MVL+ runs (any topic) and observe whether any of the four primary failure patterns recur (anchor-not-interrogated, candidate-not-probed, dimension-mismatch, Goal-clause imbalance). Document observations in `devdocs/improvement_observations.md` per MVL+'s observation step.
  **Who:** User during normal MVL+ runs. (M8)
  **Gate:** observable — after 3 runs, decide whether to promote the deferred candidates (M4, M5, M6, M9) based on recurrence.
  **Why:** Provides the always-on baseline that complements the source edits, and supplies the promotion gate for deferred candidates. Honors LOOP_DIAGNOSE Step 5's guardrail that one chain does not justify broad rewrites.

### COULD

- **What:** When the corrected `Discovery Search` mechanism is patched into `homegrown/protocols/navigation_context_intake.md` per the corrected finding's Next Actions, cross-link this diagnostic finding from the patch's commit message or PR description so the trail from failure → diagnosis → fix is traceable.
  **Who:** Implementer of the navigation-context-intake patch.
  **Gate:** when the navigation-context-intake patch is drafted.
  **Why:** Builds a corpus of correction-chain → diagnostic → fix triples that LOOP_DIAGNOSE Step 6 names as the threshold for protocol changes (5-10 stable findings). One linked example does not satisfy the threshold but starts the corpus.

### DEFERRED

- **What:** Goal-clause balance check at MVL+ ROOT NEW. Surface a "framing imbalance" warning when the Goal section's design-clause to need-clause ratio is heavily design-oriented. (M4)
  **Gate:** revive when another correction chain shows a similar Goal-clause imbalance (≥ 4:1 ratio) AND the imbalance is causally linked to a downstream cascade. If revived, drop the specific 4:1 threshold and replace with qualitative recognition: "if the Goal is heavily design-oriented, surface a 'should this artifact exist?' clarification."
  **Why (if revived):** Framing is upstream of all disciplines, so a successful framing patch would prevent the entire cascade. Single-chain evidence is too thin now.

- **What:** Comparator-surfacing prompt at Scope Check. When the user's question contains "easier," "better," "more," "less," "cheaper," "faster" without an explicit comparator, surface "compared to what?" as a clarification before the inquiry begins. (M5)
  **Gate:** revive when another correction chain shows comparative phrasing without explicit comparator AND the missing comparator is causally linked to a downstream cascade.
  **Why (if revived):** Catches a recognizable input pattern; pairs with M4 if both reach revival simultaneously (both target framing).

- **What:** Cross-cutting "name-and-test load-bearing anchors" pattern as a single protocol-level rule applied at both Sensemaking Phase 3 and Critique Phase 0. (M6)
  **Gate:** revive after 3 or more correction chains show the same anchor-or-dimension covertly-held-assumption pattern.
  **Why (if revived):** A single cross-discipline rule is more economical than per-discipline patches (M1 + M3) once enough chains accumulate to justify the abstraction. Premature now per LOOP_DIAGNOSE Step 5.

- **What:** One-time canary test — synthesize a question with the same shape as the prior's prompt (comparative-without-comparator + form-anchored phrasing) and run /MVL+ on it once with a different runner instance to provide cross-runner control. (M9)
  **Gate:** revive only if M8's monitoring is ambiguous after 3 runs AND the diagnostic verdict needs additional empirical evidence to promote M4/M5/M6.
  **Why (if revived):** Cheapest empirical test of failure-pattern reproducibility. Distinguishes one-off content-specific failure from systematic process-level pattern.

## Reasoning

### Why this answer over the alternatives

The diagnosis is **process-level**, not content-level. Two structurally distinct framings were available:

- **Content-level framing.** "The maintained index recommendation was wrong; the documented search is right." This framing is rejected because it treats the corrected inquiry as ground truth, which LOOP_DIAGNOSE Step 5 explicitly forbids: *"Do not treat the corrected inquiry as ground truth."* The corrected finding itself preserves the maintained index as deferred behind concrete revival triggers — it is bounded ambiguity, not a closed answer. A content-level diagnosis would over-claim and fail under future evidence (e.g., if cross-run human browsing or external readers later justify the index).

- **Process-level framing.** "The prior loop's reasoning broke at four specific process-level surfaces (probe gap, anchor not interrogated, dimension missing, goal corridor pre-encoded)." This framing holds regardless of whether the corrected inquiry's verdict is later revisited. It is the framing the diagnostic finding adopts.

### Why the cascade has two upstream sources

A single-source diagnosis was considered (Hypothesis B as sole upstream cause). It was rejected because the `_branch.md` Goal-clause distribution (Hypothesis D) is observable and predates Sensemaking — Sensemaking's Phase 1 / Constraints inherits the corridor the Goal pre-encoded. The two sources are correlated but separable: D is visible in the runner-constructed Goal; B is visible in Sensemaking's Phase 1 anchor selection and Phase 3 ambiguity set. Both could fail independently; here, both did. The Sensemaking ambiguity (Ambiguity 3 in this diagnostic's Sensemaking) collapses on this point with HIGH confidence.

### Why Critique gets HIGH confidence despite being downstream

A "Critique culpability is fully inherited from Innovation" framing was considered. It was rejected because the dimension list is independent of the candidate set. A Critique whose dimensions named "duplicate-derivable-state" would have flagged the surviving Candidate E even with the prior's truncated candidate set, because Candidate E's "scan/backfill required for safety" property fails such a dimension regardless of which other candidates are on the table. The corrected Critique's Stale-State Resistance dimension demonstrates this empirically — it produces the same flag against the prior's Candidate E if applied retrospectively. So C has independent dimension-articulation responsibility on top of inherited candidate-set effects.

### Why the deferred candidates were not killed

LOOP_DIAGNOSE Step 5 explicitly prescribes deferral for candidates whose evidence is borderline: *"Do not propose broad fundamentals rewrites from one weak correction chain. Do not create a maintenance branch unless the diagnostic finding produces a specific source-change candidate and evaluation gate."* M4, M5, M6, M9 each have plausible value and a real failure target, but their evidence is single-chain and their implementation cost is non-trivial relative to that evidence. Killing them would lose the promotion path; promoting them would overreach. Deferral with concrete revival triggers preserves both options.

### Why M6 (cross-cutting pattern) is killed-as-v1 rather than promoted

M1 + M3 separately cover the immediate need (Sensemaking anchor + Critique dimension) without invoking a cross-discipline abstraction. A cross-cutting "name-and-test load-bearing anchors" rule is more economical when the pattern is established across multiple chains, but defining the abstraction now risks fundamentals overreach. The deferred form is the right shape; the immediate need is two narrow patches.

### Why M7 (content cleanup) is included alongside the process patches

M7 is orthogonal to M1/M2/M3 — it is content-level cleanup, not process-level prevention. Including it does not dilute the process-level diagnostic claim. The risk it addresses (a future runner executing the prior's obsolete recommendation in isolation) is real if low-probability; the cost is trivial; the corrected finding's `corrects:` frontmatter is already there, so M7 just completes the reciprocal link.

### Reconciliation across the five disciplines

The five discipline outputs (Exploration, Sensemaking, Decomposition, Innovation, Critique) of this diagnostic agree on the cascade structure:

- Exploration's Confidence Map: A, B, C, D confirmed; Decomposition and Innovation as amplification effects.
- Sensemaking's SV6: cascade with two upstream causes (D + B); parallel A; partly-independent C.
- Decomposition's Question Tree: 8 pieces matching LOOP_DIAGNOSE Step 4 schema; verification criteria align with the per-hypothesis schema.
- Innovation's Assembly Check: M1 + M2 + M3 + M7 + M8 produces redundant upstream-parallel-downstream coverage; M4-M6, M9 deferred.
- Critique's Signal: TERMINATE with ranked survivors; clean SURVIVE assembly exists; no failure modes observed.

No contradictions across stages. The only tension is between "Critique fully inherited" (counter-interpretation) and "Critique partly independent" (resolved); the resolution is Sensemaking Ambiguity 2 in this diagnostic, with HIGH confidence on the dimension-articulation independence.

### How this finding relates to the upstream inventory

The `2026-05-06_13-19__navigation_correction_chain_failure_inventory` inquiry was the upstream context. Its Failure Inventory row 8 named this exact failure at HIGH confidence: *"A maintained global index was recommended before deterministic filename/path search was tested hard enough."* That row is observation; this finding is the deeper diagnosis. The inventory's Recommended Loop Diagnose Run Order ranked this chain first as the cleanest correction edge; the prompt the user invoked is that inventory's Prompt 1. This diagnostic's results are consistent with the inventory's row 8 and add the failure-stage attribution, the cascade structure, and the maintenance candidates with evaluation gates.

## Open Questions

### Monitoring

- After M1, M2, M3 land and the next 3 MVL+ runs complete, observe whether the gates fire as predicted. If zero of three runs produce the required Phase 3 entries (M1 gate), downgrade M1 to monitoring rather than declaring it ineffective; the rule may need rephrasing for runner recognizability.
- After 3 MVL+ runs, assess whether any of the four primary failure patterns recur. Recurrence promotes M4/M5/M6/M9 from deferred to ACTIONABLE.

### Blocked

- The cross-runner control variant of M9 (canary test) requires a different Claude session or runner instance. Current LOOP_DIAGNOSE runs use the single-runner mode; multi-runner control is not yet wired into MVL+.

### Research Frontiers

- LOOP_DIAGNOSE Step 6 prescribes that the protocol stay as a wrapper around MVL+ until 5-10 diagnostic findings show stable internal method. This finding is the first. Whether the diagnostic method generalizes across other correction chains is an open empirical question — testable as the inventory's other six prompts are run.
- Whether "name-and-test load-bearing assumptions" is a genuinely cross-discipline pattern (justifying M6 promotion) or a per-discipline pattern (M1 and M3 independently sufficient) is open. Three or more correction chains showing the same pattern resolve it.

### Refinement Triggers

- Re-open the Critique dimension recommendation (M3) if the duplicate-derivable-state dimension fires false positives in the next 3 runs (e.g., flagging candidates whose state is genuinely irreducible). Refinement direction: tighten the trigger to "candidate creates state that DOES exist elsewhere" rather than "candidate creates state that COULD be derived."
- Re-open the Sensemaking anchor-interrogation rule (M1) if the rule fails to fire because runners do not recognize Phase 1 / Constraints items as "domain properties." Refinement direction: provide explicit phrasing patterns (e.g., *"X values Y"*, *"X is Z"*) as recognition triggers.
- Re-open M7 if the prior `finding.md` annotation is found to be insufficient — for example, if a future runner still treats the prior's recommendation as live despite the supersession note.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+

Use homegrown/protocols/loop_diagnose.md.

prior_path:
devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility

corrected_path:
devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search

human_correction:
The user challenged the maintained index recommendation by asking why Homegrown needs an index if it can simply search the codebase for known file names and regex-searchable patterns.

optional_context:
The prior inquiry recommended `devdocs/navigation_context/past_navigation_memory_file_index.md` as a maintained non-authoritative discovery registry with scan/backfill fallback. The corrected inquiry said that fallback undermines the need for a maintained v1 index and replaced it with `PastNavigationMemoryFile Discovery Search` plus optional run-local candidate report.

diagnostic_goal:
Identify what the prior loop likely missed when it recommended a maintained PastNavigationMemoryFile Index before validating deterministic active-tree search. Diagnose affected stage or framing step with confidence levels. Pay special attention to whether Exploration under-tested the known filename/path search alternative, whether Sensemaking overvalued Homegrown explicitness as a maintained artifact, and whether Critique let a duplicate mutable state source survive. Read _branch.md, _state.md, finding.md, root discipline outputs if present, and docarchive/*.md for both folders. Do not diagnose from finding.md alone. Treat the corrected inquiry as comparative evidence, not ground truth.
```

</details>

## Diagnostic Verdict

**Overall:** ACTIONABLE-PARTIAL.

- **Best-supported diagnosis:** The prior loop's failure was mechanism prioritization through a cascade of process-level shortcomings — two upstream causes (Hypothesis D loop framing pre-encoded the design corridor + Hypothesis B Sensemaking anchored explicitness to durable artifact form without interrogation) plus a parallel Exploration probe gap (Hypothesis A) plus a partly-independent Critique dimension blindness (Hypothesis C). Decomposition and Innovation propagated B's anchor downstream; Critique's dimension list independently failed to surface mechanism-level redundancy.

- **Strongest maintenance candidate:** M1 (Sensemaking anchor-interrogation prompt). Highest leverage because it sits at the dominant cascade origin; lowest cost (one paragraph in `homegrown/sense-making/references/sensemaking.md` Phase 1); concrete evaluation gate; multiple downstream effects (Decomposition Q-tree presupposition, Innovation candidate-set blindness) are inherited and would also be prevented.

- **Main uncertainty:** Whether D (loop framing) and B (Sensemaking anchor) are independently culpable or whether B subsumes D. The two are correlated through the runner's Goal-construction step. One correction chain cannot fully partition them. M4 (Goal-clause balance check) is deferred until another chain shows the same imbalance, which is the empirical resolution path.

- **Recommended next step:** Implement M1, M2, M3, M7 as one-paragraph patches plus single-edit content cleanup. Run M8 (monitor next 3 MVL+ runs) as the always-on baseline. Do not promote LOOP_DIAGNOSE to a standalone discipline yet — per protocol Step 6, that requires 5-10 stable diagnostic findings; this is the first. The inventory inquiry's Prompts 2-7 (other correction chains) are the natural next LOOP_DIAGNOSE runs; their findings will accumulate the corpus needed to evaluate whether M4/M5/M6 should be promoted.
