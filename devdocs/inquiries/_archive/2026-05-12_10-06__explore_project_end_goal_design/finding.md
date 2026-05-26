---
status: active
refines: devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/finding.md
---
# Finding: explore — project-end-goal-aware design

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/finding.md` (the iter-2 finding from the prior inquiry; committed `/explore = purposive open-mode surfacing`).

**Revision trigger:** User perspective shift. After the iter-2 finding, the user asked to view `/explore` through the project's end-goal lens (`README.md` + `enes/desc.md`) and to test whether the staged for-loop pattern described for navigation in `devdocs/nav_north_star.md` actually belongs to `/explore`.

**What's preserved:**

- The iter-2 verb-meaning: *to explore = purposive open-mode surfacing of a territory*.
- The five-section discipline-spec structure (Identity / Components / Process / Quality / Output).
- The NOT-list against neighbor disciplines.
- The cognitive-commitment-mode ⊥ territory-type-mode orthogonality.
- The open→closed drift failure mode (from iter-2).
- All iter-2 deferred items (typed Input Contract addition; typed Existence-Claim Schema addition; Drift-as-Escalation; Legend section; Claim-Type Vocabulary; Discovery-vs-Revisit telemetry; Cross-Inquiry Merge Contract; SK-MODE-DECLARED; SK-D paired-discipline; SK-PERSISTENT research frontier).

**What's changed:**

- *One iter-2 deferred item is promoted.* The Cross-Inquiry Merge Contract (iter-1 SK-MAX-4, iter-2 DEFERRED) is promoted to **spec-level ACTIONABLE** because the staged for-loop pattern requires it operationally. Implementation remains deferred.
- *One iter-2 deferred field is partially promoted.* The typed Input Contract addition stays deferred as a whole; one specific field (resolution-level) is promoted to spec-level ACTIONABLE.
- *One iter-2 failure mode gains an alongside companion.* Open→closed drift remains; staging-boundary regression is added as a new failure mode (speculative; calibration-state-dependent).

**What's new:**

- *Four spec-level additions to the existing /explore two-file pair* (Step 0 resolution-level field; staging-aware telemetry block; staging-boundary regression failure mode; Merge Contract subsection with node-identity contract).
- *One new runner artifact* — `/staged-explore` runner-pattern doc at `homegrown/runners/staged_explore.md`, separate from /MVL+. Doc-only v1; skill-ification deferred.
- *One meta-vocabulary reconciliation* — preserve `devdocs/nav_north_star.md` + add a one-line vocabulary note clarifying that "navigation" in that document refers to /explore operations + migrate the operational content to /explore's spec and the staged-explore runner doc.
- *A 4-runner taxonomy table* — `/MVL`, `/MVL+`, `/meta-loop`, `/staged-explore` — with explicit scope boundaries. `/staged-explore` is discipline-orchestration; `/meta-loop` is inquiry-orchestration.

**Migration:** The total adoption work is bounded: edit `homegrown/explore/SKILL.md` (add Step 0 resolution-level field), edit `homegrown/explore/references/explore.md` (add staging telemetry block, staging-boundary regression failure mode, Merge Contract subsection), create `homegrown/runners/staged_explore.md` (the new runner doc), edit `devdocs/nav_north_star.md` (add vocabulary note). All content is drafted concretely in this inquiry's `innovation.md` and `critique.md`; user can copy-paste-and-tweak.

## Question

From `_branch.md`: *given the project's end-goal definition (`README.md` + `enes/desc.md`) and the staged multi-resolution iteration pattern described for navigation in `nav_north_star.md`, what attributes must `/explore` have — and how should it be designed — to (a) serve the project's MVL+ loop and the trajectory toward autonomous self-improvement, (b) explicitly support the staged for-loop pattern of mapping a territory at progressively finer resolutions, and (c) be cleanly distinguished from `/navigation`?*

Three operative hypotheses to test:
- **H1:** `nav_north_star.md`'s "whole-codebase navigation" is properly /explore territory.
- **H2:** The staged for-loop pattern is a natural execution mode of /explore's resolution management, made explicit.
- **H3:** Project-end-goal-relevant attributes include composability, Baldwin-cycle telemetry, runnable-at-L0 with path to autonomous, /intuit-composable output.

## Finding Summary

- **H1 confirmed.** `nav_north_star.md`'s "whole-codebase navigation" describes /explore operations — surfacing what exists in a codebase, building a map of nodes, iterating at increasing resolution. The "navigation" vocabulary in that document is loose; the operation is /explore. /navigation (iter-1 definition: enumerate routes from a known state) remains a different operation.

- **H2 confirmed with refinement.** The staged for-loop pattern (first run = ~10 high-level items; subsequent runs drill at finer resolution → ~50-100 → ~200 nodes) is **runner-level orchestration of multiple /explore invocations**, not a single-invocation behavior. The iter-2 /explore design already supports this via "cross-invocation re-explore delegated to runner." What's needed is to make the pattern explicit as a runner-pattern doc + add a resolution-level input-contract field + activate the cross-invocation merge contract.

- **H3 confirmed and operationalized.** End-goal-relevant attributes are: composable outputs, staging-aware telemetry, runnable at L0 manual with clear path to autonomous, /intuit-composable structure. Most are present in iter-2; two need explicit support added.

- **The recommended adoption package** is four spec-level additions to /explore's existing two-file pair + one new runner artifact (`/staged-explore` runner-pattern doc) + one meta-vocabulary reconciliation note in `nav_north_star.md`. All content is drafted concretely; adoption is copy-paste-and-tweak.

- **The runner taxonomy** gains a fourth entry. `/MVL` is the short cognitive loop on a question; `/MVL+` is the extended cognitive loop on a question; `/meta-loop` orchestrates inquiry-level traversal; `/staged-explore` (proposed, doc-only v1) orchestrates /explore invocations at progressive resolutions. The boundary between `/staged-explore` and `/meta-loop` is **scope**: `/staged-explore` is discipline-orchestration (one discipline's invocations); `/meta-loop` is inquiry-orchestration (multiple inquiries' moves).

- **The user-adoption choice** is the next concrete step. Three options: (A) apply the edits and create the new file as drafted; (B) preserve this finding as design documentation without editing the canonical files; (C) adopt with shape variations (e.g., `δ-STD` paragraph instead of `δ-MIN` one-liner for the vocabulary note).

## Finding

### Context: why this iteration, and what it adds to iter-2

The iter-2 finding (in the prior inquiry, `2026-05-12_00-40__explore_discipline_from_scratch/finding.md`) committed `/explore`'s verb-meaning as *purposive open-mode surfacing* and produced a five-section discipline-spec skeleton (Identity / Components / Process / Quality / Output) with three refinement points. That work was *intra-discipline*: it answered "what does /explore mean as a cognitive operation."

This inquiry shifts perspective. It looks at /explore through the lens of the project's end goals: the autonomy ladder and Baldwin cycles defined in `enes/desc.md` (the north-star document), the ignition/loop framing of `README.md`, and the specific staged for-loop pattern described in `devdocs/nav_north_star.md` (a document about how "navigation" should run in the codebase, but whose content actually describes /explore operations).

The user's specific question pulled three threads together: (i) what attributes does /explore need to serve the project's end-goal trajectory; (ii) does the staged for-loop pattern from `nav_north_star.md` belong to /explore (the user's intuition was yes); (iii) where is the boundary between /explore and /navigation given the vocabulary confusion. The inquiry's job was to test all three.

The result REFINES the iter-2 finding (preserves its commitments; adds end-goal-aware design details) rather than supersedes it. The iter-2 cognitive grounding (purposive open-mode surfacing; relevance as scan-driver; surfaced-item unit; open→closed drift failure mode) all carry forward verbatim. This iteration adds the runner-level pattern and the spec-level supports for staging.

### What "/explore" needs from the project-end-goal lens

The project's end goal is autonomous-consciousness via Baldwin cycles, with the human role decreasing across an autonomy ladder L0 → L4+. For any discipline to serve this trajectory, several attributes are load-bearing:

- **Composable outputs** — Baldwin cycles accumulate refinements across invocations; the Predictive RC layer (`/intuit`) composes discipline outputs as input. Local /explore maps must merge into bigger maps cleanly.
- **Telemetry rich enough for Predictive RC + Retrospective RC** — Baldwin cycle needs T0 predictions and T2 outcomes; discipline output must expose enough structure for both.
- **Inspectable at L0–L2** — at early autonomy levels, humans review every output; markdown sections work.
- **Domain-agnostic** — the project's framing requires disciplines to work across codebases, product decisions, research, etc.
- **Resolution-staging-aware** — single LLM invocations cannot produce one huge accurate output at all resolutions; staging across multiple invocations is required for non-trivial territories (per `nav_north_star.md`'s explicit observation).
- **`/intuit`-composable output structure** — the Predictive RC needs to score hunches over /explore's output; structure must be predictable and typed.
- **Runnable at L0 manual + clear path to higher autonomy** — the discipline shouldn't require autonomy to work, but its design shouldn't block higher autonomy when it arrives.

The iter-2 /explore design already provides most of these. What's missing or under-specified: composability is named in iter-2's deferred items but not activated; resolution-staging is implicit (via "cross-invocation re-explore delegated to runner") but not made explicit; staging-aware telemetry is absent.

This iteration's design closes those gaps.

### The staged for-loop pattern belongs to /explore — and is runner-level

`nav_north_star.md`'s pattern: a first run surfaces ~10 high-level items in the territory; each next run takes a prior-pass item and surfaces ~5–10 sub-items at finer resolution; total grows to ~50–100 after round two, ~200 after round three. The runner re-invokes the discipline; the discipline doesn't loop within itself.

This is the natural execution mode of /explore's resolution-management component, made explicit. The discipline stays single-invocation and idempotent within an invocation (per iter-2). The staging is **runner-level orchestration** — the runner picks first-pass items worth drilling, re-invokes /explore signal-first on each, and combines the resulting child maps with the parent map via the merge contract.

Why is staging runner-level and not single-invocation? Because LLM context budgets are real, and the pattern described in `nav_north_star.md` is precisely about NOT doing one huge multi-resolution output in a single call. The discipline stays focused on one cognitive cycle per invocation; the runner accumulates results across calls. This factoring honors both /explore's cognitive-operation identity and the operational realities of staged execution.

The runner is documented as `/staged-explore` — a new runner pattern, separate from `/MVL+`. `/MVL+` runs the cognitive loop (E → S → D → I → C) on a question. `/staged-explore` orchestrates `/explore` invocations across resolution stages on a territory. Different purposes, different scopes.

### The /explore vs /navigation boundary, and the nav_north_star.md vocabulary issue

`/navigation`'s iter-1 definition is: enumerate next-move routes from a completed cycle's state, producing a typed-route map across the 16-type taxonomy. This is **perception-only** — `/navigation` lists where you could go next; it does not surface what's in a territory.

`/explore`'s iter-2 definition is: purposive open-mode surfacing of a territory's contents, producing a confidence-tagged map of surfaced items. This is **map-building** — `/explore` brings into view what's there, not what's-next-to-do.

The boundary is clean and operational: surfacing-what-exists is `/explore`; enumerating-next-moves-from-known-state is `/navigation`. They serve different cognitive purposes at different points in an inquiry's lifecycle.

`devdocs/nav_north_star.md` describes a pattern (the staged for-loop building a map of the codebase) that operationally is /explore work. The vocabulary is "navigation" — historical and predating the iter-2 refinement of /explore. This is a vocabulary issue, not an operational error in the document.

The reconciliation: preserve `nav_north_star.md` as a document (it captured the staged-iteration vision usefully); add a vocabulary note at the top clarifying that "navigation" in this document refers to /explore operations; migrate the operational content (the for-loop pattern, the whole-codebase vs directional modes, the composability of local artifacts) into /explore's spec and the new `/staged-explore` runner doc. The user can then follow cross-references to see the canonical specs.

### The four spec-level additions to /explore

The existing two-file pair (`homegrown/explore/SKILL.md` + `homegrown/explore/references/explore.md`) gains four additions, all bounded to single sections.

**A resolution-level field in Step 0 declarations.** Currently the SKILL.md's Step 0 declares cognitive-commitment-mode (always "open" for /explore), territory-type-mode (artifact / possibility), and entry-point (frontier-first / signal-first). The new field is `expected: ~N surfaced items` for first-pass invocations or `expected: ~N items per parent` for staged invocations after the first. This is a quantitative anchor — informal enough to honor the project's existing prose-style declarations, concrete enough to drive the staging runner's pass-by-pass configuration.

**A staging-aware telemetry block in the Telemetry section.** Three essential fields plus two optional ones. Essential: `items_surfaced_count` (regression detection signal), `parent_pass_anchor` (cross-invocation referencing), `stage_index` (runner progress tracking). Optional: `branching_factor` (derivable but useful), `resolution_evidence` (qualitative note). These let the staged-explore runner read /explore's output and decide the next pass's configuration; they also let the Predictive RC (when /intuit is built) score the discipline's staged execution.

**A staging-boundary regression failure mode in the Quality section.** Speculative — not yet observed in practice, named here as a forward-looking commitment. Recognition signal: a next-pass /explore invocation on a prior-pass item produces fewer than two surfaced items at the requested resolution. Corrective action: re-classify the prior-pass item as "atomic-at-this-resolution"; do not retry at the same resolution; optionally retry at coarser resolution to confirm. Detection is split: /explore names the failure mode; the runner (staged-explore) detects it from the invocation's telemetry. The threshold (< 2 items) is a starting default for empirical refinement, not a fixed claim.

**A Cross-Inquiry Merge Contract subsection in the Output section.** This activates iter-1's SK-MAX-4 (Cross-Inquiry Merge Contract) at spec level. The subsection specifies an operation `merge_explore_maps(map_a, map_b) -> merged_map` with explicit logic for two cases: (i) staging-within-a-single-run (child IDs reference parents; merge preserves hierarchy); (ii) sibling-inquiries-with-overlapping-territories (LLM-assisted label-similarity matching identifies probably-overlapping items; user or autonomous selector confirms). The node-identity contract sits within the subsection: each surfaced item gets a sequential ID (`N1`, `N1.3`, `N1.3.2`) for stable cross-invocation referencing plus an LLM-generated descriptive label for human readability. Operational status is **spec-level only** — the contract enables manual merging today (user reads two outputs, combines by hand or with LLM assistance following the stated logic); code-level implementation is deferred.

### The new /staged-explore runner artifact

A new file at `homegrown/runners/staged_explore.md` containing the runner-pattern documentation. The doc has five sections: (i) the runner-taxonomy table positioning /staged-explore alongside /MVL, /MVL+, /meta-loop; (ii) the boundary statement against /meta-loop (discipline-orchestration vs inquiry-orchestration); (iii) the for-loop pattern with explicit pass-by-pass invocation parameters; (iv) the resolution-progression strategy; (v) the termination criteria.

A worked example threads through the doc: the nav_north_star.md codebase-mapping scenario (first pass surfaces ~10 high-level directions; second pass drills each into 5-10 sub-concepts → ~50-100 nodes; third pass deepens further to ~200 nodes). The example anchors the abstract pattern in a concrete domain the user already understands.

The doc is **documentation-only for v1**. The user (or whoever is running staged-explore) manually invokes /explore at each pass following the doc's pattern. There is no `/staged-explore` skill in v1. Per `nav_north_star.md`'s explicit acceptance of "manual-trigger v1 is acceptable," this is sufficient. Skill-ification is DEFERRED with revival trigger: manual orchestration becomes unsustainable, OR autonomous mode-selection ships at the project's higher autonomy levels.

### The nav_north_star.md vocabulary reconciliation

`devdocs/nav_north_star.md` is preserved as a document — it captured the staged-iteration vision before /explore was redefined in iter-2; renaming or deleting it would lose context. A one-line vocabulary note is added at the top: *"The 'navigation' vocabulary in this document refers to /explore operations (mapping a territory). See `homegrown/explore/references/explore.md` for the canonical discipline definition and `homegrown/runners/staged_explore.md` for the runner pattern."* The operational content (for-loop pattern, whole-codebase vs directional modes, composability) is migrated into /explore's spec and the runner doc; `nav_north_star.md` becomes a forward-pointer to those canonical artifacts.

If the one-line note proves insufficient empirically (readers still confused after reading it), an alternate paragraph form is available as a user-preference fallback.

### The user-adoption choice

The design is ready. The next concrete step is the user's choice of adoption mode:

- **Option A — Apply as edits.** Edit `homegrown/explore/SKILL.md` (add Step 0 resolution-level field). Edit `homegrown/explore/references/explore.md` (add staging telemetry block, staging-boundary regression failure mode, Merge Contract subsection). Create `homegrown/runners/staged_explore.md` (the new runner doc; content drafted in this inquiry's `innovation.md`). Edit `devdocs/nav_north_star.md` (add vocabulary note). Update this finding's frontmatter (already set: `refines: <iter-2 finding>`); update iter-2 finding's frontmatter (add `refined-by:` pointer back).
- **Option B — Preserve as design documentation.** Keep this finding as the reference; do not edit the canonical files yet. Allows further deliberation; preserves iter-2 + earlier as canonical until explicit adoption decision.
- **Option C — Apply with shape variations.** Apply edits with user-preferred variations: the vocabulary note as a paragraph instead of one line; the runner doc as a single-page guide instead of a 5-section spec; the staging telemetry with fewer fields. These variations are pre-evaluated in this inquiry's `innovation.md` and `critique.md` as ALTERNATE / DEFERRED options.

The choice is the user's; this finding does not commit to a specific option.

## Next Actions

### MUST

- **What:** choose adoption mode (A: apply edits; B: preserve as documentation; C: apply with shape variations).
  - **Who:** user.
  - **Gate:** before any change to canonical files (`homegrown/explore/`, `homegrown/runners/`, `devdocs/nav_north_star.md`).
  - **Why:** the design is structurally complete; further work depends on the adoption mode chosen.

### COULD

- **What:** adopt Option A (apply the four file edits + create the new runner doc).
  - **Who:** user.
  - **Gate:** after the MUST adoption-mode choice resolves to A.
  - **Why:** ships the end-goal-aware /explore design as canonical artifacts; enables the staged for-loop pattern operationally; the content is already drafted concretely in this inquiry's outputs.

- **What:** adopt Option B (preserve as documentation).
  - **Who:** user.
  - **Gate:** after the MUST adoption-mode choice resolves to B.
  - **Why:** allows further deliberation without committing canonical-file changes; iter-2 remains the active /explore canonical state.

- **What:** adopt Option C (apply with shape variations).
  - **Who:** user.
  - **Gate:** after the MUST adoption-mode choice resolves to C; user specifies which variations.
  - **Why:** retains the design's load-bearing commitments while honoring user-preference on stylistic axes (vocabulary-note prominence; runner-doc verbosity; telemetry-field count).

### DEFERRED

- **What:** activate `Cross-Inquiry Merge Contract` at the implementation level (code or skill-supported merging).
  - **Gate:** meta-loop runs sibling inquiries with overlapping territories OR users report manual merging is unsustainable.
  - **Why (if revived):** moves from spec-level (manual merging) to operational tooling.

- **What:** skill-ify `/staged-explore` (convert the runner doc into an invokable skill).
  - **Gate:** manual orchestration becomes unsustainable, OR autonomous mode-selection ships at Level 3+ on the autonomy ladder.
  - **Why (if revived):** automates the for-loop pattern; removes manual-trigger friction.

- **What:** add `/parallel-loops` as a 5th runner in the taxonomy (for multi-head loops with cross-comparison).
  - **Gate:** the project starts building multi-head loop capability (per the user's memory on end-goal loop architecture).
  - **Why (if revived):** completes the runner taxonomy for the project's full end-goal architecture.

- All iter-2 deferred items remain active (typed Input Contract addition for fields beyond resolution-level; typed Existence-Claim Schema; Drift-as-Escalation; Legend section; Claim-Type Vocabulary; Discovery-vs-Revisit telemetry; SK-MODE-DECLARED frontmatter; SK-D paired-discipline). Each retains its iter-2 revival trigger.

## Reasoning

This section names what was considered and why each verdict held.

**The recommended assembly survives** because it honors the user's framing (project-end-goal lens + staged-iteration support + /explore-vs-/navigation clarity), preserves all iter-2 commitments, respects the project's existing discipline-spec pattern, and respects `nav_north_star.md`'s explicit "manual-trigger v1 is acceptable" framing. Five critique-added refinements strengthen it without changing structure: vocabulary-note prominence as user-choice; staging telemetry tiered into essential and optional; resolution-level field with concrete examples; merge contract with a "Manual merging in v1" paragraph; staging-boundary regression with empirical-refinement note.

**The doc-only v1 runner survives** because the user explicitly accepted manual triggering and the project's existing runner specs (/MVL, /MVL+, /meta-loop) are at varying levels of skill-vs-doc; the doc-first approach is consistent with the project's existing rhythm. Skill-ification is a real future need with a clear revival trigger.

**The SK-MAX-4 merge contract is promoted** from iter-2 DEFERRED to spec-level ACTIONABLE because the staged for-loop pattern operationally requires cross-invocation referencing and merging. Spec-level activation enables manual merging today; implementation can wait.

**The staging-boundary regression failure mode survives as speculative** because it is structurally plausible (a prior-pass item might be atomic at the next resolution) and naming it now gives future runs a recognition handle. The empirical-refinement note acknowledges the threshold (< 2 items) is a starting default, not a fixed claim.

**The runner taxonomy with 4 entries is complete for now.** /staged-explore vs /meta-loop is the load-bearing boundary the inquiry surfaced; both are documented explicitly. /parallel-loops is named as a future addition (research frontier) but not added to the active taxonomy because the project doesn't yet build multi-head loops.

**Killed candidates** (in critique): `α-NONE` (no spec additions) doesn't honor the inquiry's reasoning — the end-goal lens identified attributes worth absorbing into the spec. `β-MACHINE-READABLE` (YAML-like runner spec) has no current consumer; revisit at skill-ification. `Level-2 inversion` (/staged-explore same name as /explore) collapses the discipline/runner distinction structurally. `Level-1 inversion doc-location` (place runner under `homegrown/explore/runners/`) was unnecessary — `homegrown/runners/` is cleaner.

**The relationship to iter-2 is REFINES**, not SUPERSEDES. All iter-2 structural commitments are preserved; this inquiry adds end-goal-aware details on top. The frontmatter records `refines: <iter-2 finding path>`; on adoption, the iter-2 finding should gain a `refined-by: <this finding's path>` pointer back.

## Open Questions

### Monitoring

- *Does staging-boundary regression actually fire in practice?* Detection is downstream-observable (in the runner). After three or more staged-explore runs that use the for-loop pattern, check whether the failure mode triggered. If it fires more than once across three runs, the threshold may need adjustment from "< 2 items" to a higher value, or the corrective action may need refinement.

- *Is the one-line vocabulary note in `nav_north_star.md` sufficient?* Empirically: after readers encounter the document with the note, are they still confused about /explore vs /navigation? If yes, upgrade to the paragraph form (δ-STD).

### Refinement Triggers

- *User chooses Option B (preserve as documentation) or Option C (apply with variations).* Either resolves to specific next actions per the chosen path.

- *Implementation-level merge contract code is built.* Reactivates `Cross-Inquiry Merge Contract` from spec-only to operational.

- *Manual /staged-explore orchestration becomes unsustainable.* Activates skill-ification.

- *Project starts building multi-head loops.* Activates the `/parallel-loops` taxonomy entry.

- *All iter-2 revival triggers remain active* — typed schemas, automation consumer, claim-type ambiguity, cross-invocation re-explore frequency, sibling-inquiry territory overlap.

### Research Frontiers

- *The `/parallel-loops` runner for multi-head loops with cross-comparison.* Mentioned in user memory; future end-goal-architecture component; depends on the project starting that work.

- *The full restructure of discipline reference files around cognitive operations* (iter-2's SK-B). Carried forward; long-term direction if project decides to make the systemic change.

- *The persistent-state variant of /explore* (iter-1's SK-PERSISTENT). Carried forward; depends on loop-architecture evolution.

- *A cognitive-operation taxonomy across all seven disciplines* (iter-2 sensemaking flagged this). Should be its own inquiry rather than committed within /explore's spec.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+
okay now lets change our perspective, and look at our project end goals. in /Users/ns/Desktop/projects/native/README.md and enes/desc.md and lets talk about how explore should work, with which attributes so our MVL+ loop will support what this project is trying to achieve...

for example, if we can define explore in context of mappig etc, then maybe we can understand what is explore and can we run staged explore as defined in devdocs/nav_north_star.md First run produces the big concepts in the codebase. Say it surfaces 10 high-level directions.
- Second run takes each of those 10 big concepts and discovers the smaller concepts around it. For each big concept, second-run navigation might find 5-10 sub-concepts. Total after the second round: maybe 50-100 nodes at finer resolution.

section

even tho it is about navigation i think it is about explore but i dont know the full difference
```

</details>
