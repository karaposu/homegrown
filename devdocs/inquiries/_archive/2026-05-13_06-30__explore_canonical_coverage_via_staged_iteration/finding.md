---
status: active
---
# Finding: Explore Canonical Coverage via Staged Iteration

## Question

The user asked: *"How can we make sure /explore indeed explores and surfaces all relevant content, and not randomly? Canonical-source content can be missed — /explore should work in such way that it shouldn't miss them? Maybe a staged run like `devdocs/nav_north_star.md`."* They also proposed: *"explore should create a map-like output of relevant concepts at first, and then should go and read surrounding context of this concept one by one."*

The inquiry's goal was a grounded design decision with rationale: **(1) WHERE does staging logic live** — inside `/explore` itself, or in a separate runner that orchestrates multiple `/explore` invocations; and **(2) WHAT concrete mechanism prevents canonical-source content from being missed** — because more staging does not automatically mean fewer misses. The answer should be actionable: the user should be able to immediately either ship a runner skill, modify `/explore` directly, or harden existing coverage rules.

(Project context the reader may need: `/explore` is the project's "Structural Exploration" thinking discipline, defined in `homegrown/explore/references/explore.md`, that surfaces items from a territory into a confidence-tagged map. `/MVL+` is the project's main pipeline runner that invokes a five-discipline sequence — Exploration → Sensemaking → Decomposition → Innovation → Critique — over an inquiry. `nav_north_star.md` at `devdocs/nav_north_star.md` is the user's vision document for how `/navigation` should run, including a staged for-loop pattern.)

---

## Finding Summary

- The user's question bundles two distinct decisions: **(A) where does staging logic live** (the architectural question) and **(B) what guarantees canonical-source non-miss** (the coverage question). Splitting them is the key move; each gets a different answer.

- **Architectural answer:** Staging belongs in a separate runner skill called `/staged-explore`, **not inside `/explore` itself**. This is over-determined by three independent structural arguments — `/explore`'s idempotency invariant (each invocation produces one map, by spec), the project's surround-layer pattern (disciplines stay atomic; orchestration lives in runners), and the long-term autonomy trajectory (runner-level mode selection is the future-friendly locus). The user's instinct toward "staging inside /explore" loses on all three axes.

- **The user's proposed staged pattern is already specified.** Section 3.6 of the `/explore` reference describes exactly the for-loop the user wants — first pass surfaces ~10 high-level items, subsequent passes drill each. It just hasn't been materialized as an invokable skill; it lives only as documentation. Closing this doc-vs-skill gap is the main piece of shippable work.

- **Coverage answer:** Canonical-source non-miss requires a **two-layer mechanism, not a single fix inside /explore**. Layer 1 (upstream, at inquiry-framing time) is a **canonical-source registry** — a list of must-touch sources the inquiry author writes into `_branch.md` (the inquiry's identity file). Layer 2 (downstream, at `/explore` run-time) is the **existing four coverage rules already in the `/explore` spec** — boundary discovery, surround-layer-first scanning, confirmed-absent annotation, and jump-scan before convergence. Staging is orthogonal to coverage: it gives progressive resolution, not guarantees against missing.

- **The load-bearing reframe:** "Canonical" inherently means *the inquiry author knows this matters*. `/explore` cannot determine what's canonical without being told. The registry is the operational form of telling.

- **The "burden on the author" objection is real but resolves toward the design.** The author isn't being given a chore — they're being given **observability they currently lack**: when `/explore` reports per-entry on the registry, a canonical-source-miss becomes a visible event (the report shows "confirmed-absent" or "not-found") instead of a silent failure. This is the rollout-framing piece the user-facing message must emphasize.

- **The shippable architecture — the Canonical Coverage Stack — has three parts**, in priority order:
  - A thin **`/staged-explore` runner skill** (around 1–2 sessions to write), with human-in-the-loop parent selection, transcluding the frontier-ledger pattern from the existing `homegrown/protocols/multi_resolution_navigation.md` (the project's documented protocol for frontier-preserving expansion across resolutions).
  - A new **`## Canonical Sources` field** in the `_branch.md` template, with **safety-net authoring guidance** ("the registry is for sources `/explore` might lexically miss — not for things you trust it to find on its own") and an **APPEND-ONLY per-entry report** added to `/explore`'s output ("path X: surfaced as item N1.3" or "path X: confirmed-absent").
  - A **per-rule × per-run audit** (one session) of recent `/explore` runs to verify the four existing coverage rules actually fire in practice, populated with explicit firing-evidence signatures.

- **Four pre-ship spec refinements are required** before shipping (not redesign — each is roughly 30–60 minutes of additional spec work): the runner's behavior when the registry is empty or absent; the per-entry match algorithm (literal-path match for path entries; conservative semantic match for concept entries); the user-facing rollout language framing the registry as observability rather than chore; and an optional small prompt in `/MVL+`'s Scope Check that nudges the author to consider canonical sources.

- **Four follow-on items are explicitly deferred** with concrete revival triggers (e.g., automated parent-selection waits until the manual runner has produced at least five inquiries' worth of selection-rationale data — the project's calibration-ladder gate).

---

## Finding

The user's literal question was about `/explore` and staging — but answering it well required first separating the two things their question was conflating: the architectural question of *where* staging logic lives, and the coverage question of *what* prevents a canonical source from being missed. The rest of this finding walks through each decision, then describes the shippable architecture that follows from both, then lays out the pre-ship work and the deferred follow-ons.

### 1. The architectural decision — staging lives in a runner, not in `/explore`

The user's framing — *"explore should work in such way that it shouldn't miss them, maybe a staged run"* — pre-biases the answer toward putting staging logic inside `/explore` itself. This pre-bias is wrong, and three independent arguments converge on placing staging in a separate runner skill called `/staged-explore`.

The first argument is internal to `/explore`'s spec. Section 3.5 of `homegrown/explore/references/explore.md` (the canonical reference for the `/explore` discipline) commits explicitly: "the discipline does NOT loop over multiple invocations within itself; cross-invocation re-exploration is the runner's responsibility." `/explore`'s per-invocation contract is one Transform — a single confidence-tagged map. Multi-pass output is structurally a different shape: multiple maps plus merge state plus frontier ledger. Putting staging inside `/explore` would change the discipline's output contract, which downstream consumers (`/sense-making`, the `/MVL+` pipeline runner) currently rely on. This is not a precedent argument — it's a mechanism argument: the consumers actually read `/explore`'s output and expect the single-map shape.

The second argument is the project's surround-layer pattern. Across the project, the universal organizing principle is "disciplines stay atomic; orchestration lives in runners." `/MVL+` orchestrates five disciplines; `/meta-loop` orchestrates `/MVL+` runs; `/multi-resolution-navigation` (the protocol at `homegrown/protocols/multi_resolution_navigation.md`) orchestrates `/navigation` expansion across resolutions. Putting staging inside `/explore` would be the one place that breaks this pattern, with no special-case justification.

The third argument is the long-term autonomy trajectory documented in `enes/autonomy_ladder.md` (the meta-loop autonomy ladder). The project is heading toward higher autonomy levels where the system autonomously selects mode and runner per inquiry. Runners are the natural locus of that mode selection. Burying the staging choice inside `/explore`'s internal logic would make it harder to expose to a future autonomous selector. Keeping orchestration in runners keeps the upgrade path clean.

The user's instinct toward staging-inside-`/explore` came from a usability concern (one command, complete map) rather than a structural argument. The usability concern is also addressable in a runner: when the user runs `/staged-explore`, they get the same single-command experience. The runner is the right place; the usability isn't lost.

Importantly, the staged for-loop the user proposed is already specified — in section 3.6 of the same `/explore` reference, plus section 5.5 (the Cross-Inquiry Merge Contract). The spec describes exactly the pattern: first pass surfaces ~10 high-level items at a coarse resolution; subsequent passes drill each item into ~5–10 sub-items at finer resolution. What's missing isn't a design; it's the **invokable artifact**. The spec lists "skill-ification of /staged-explore" as a deferred item in section 7.2. This finding's recommendation is to revive that deferred item.

### 2. The coverage decision — canonical-source non-miss is a two-layer concern

The user's other concern — *"canonical-source content can be missed"* — required a different separation. The word "canonical" is doing more work than it looks. It decomposes into two distinct phenomena that the existing `/explore` spec handles asymmetrically.

The first phenomenon is **territory surfacing** — what `/explore` actually finds when scanning a declared boundary. The `/explore` spec has four named mechanisms aimed at this: boundary-discovery (section 3.3, fires when the territory's edges aren't pre-specified), coarse-scan-includes-surround-layer (section 3.7, requires the first-pass scan to include project-wide context layers like protocols and contracts before going deep on inquiry-specific items), confirmed-absent as mandatory annotation (section 2.2, requires "this region was scanned and contains nothing" to appear in the map explicitly), and jump-scan before convergence (section 4.2, requires a deliberate scan in a previously-unscanned direction before declaring the territory mapped). These four rules address territory-surfacing rigorously.

The second phenomenon is **required-touch satisfaction** — the specific question's author knows certain sources are must-read for THIS inquiry. The `/explore` spec does not address this. And it structurally cannot: `/explore` has no way to know what's canonical for a specific inquiry without being told. "Canonical" in the user's sense implies a pre-known set, externally determined by the author of the question, not a property `/explore` can derive from the territory alone.

Staging compounds this. Even with a staged for-loop, `/explore` is still surfacing items by what stands out in the territory; staging gives more chances to find things but doesn't change what `/explore` knows to look for. A canonical source that's structurally relevant but lexically not surface-near to the question text can be missed at every pass. Staging is orthogonal to coverage, not a substitute for it.

The right answer is **a two-layer mechanism**:

- **Layer 1 (upstream, framing-time):** The inquiry author declares a **canonical-source registry** in `_branch.md` — the inquiry's identity file that lives at the top of every inquiry folder. The registry is a list of must-touch sources with one-line reasons. Authoring guidance is deliberately minimal: "list things `/explore` might lexically miss, not things you trust it to find on its own. Anything explicitly named in your Question or Goal is automatically canonical without re-listing." The registry is the **safety net, not the table of contents**.

- **Layer 2 (downstream, run-time):** The four existing coverage rules in the `/explore` spec stay where they are. The new requirement is that `/explore` also reads the registry from `_branch.md` (when present) and adds an **append-only "Canonical-Source Registry Report" section** to its output, with per-entry verdict: "surfaced as item N" (with the inventory ID), "confirmed-absent" (with reasoning), or "not-found" (no information). This is append-only — it doesn't change the existing structure of the `/explore` map, so downstream consumers like the merge contract aren't affected.

Together, these two layers make canonical-source coverage **observable**. Without the registry, a canonical-source miss is silent — the system has no record of what should have been there. With the registry plus the per-entry report, a miss becomes visible: the report says "path X: confirmed-absent" or "path X: not-found." The user can now see when something they expected was missed; today, they can't.

### 3. The shippable architecture — the Canonical Coverage Stack

Three pieces ship together as a coherent stack, with priority ordering:

**Piece 1 — A thin `/staged-explore` runner skill.** Lives at `~/.claude/skills/staged-explore/SKILL.md` plus a `references/staged-explore.md` reference file, following the existing skill pattern used by `/MVL+` and other runners. Its behavior is deliberately minimal: read the inquiry's `_branch.md`; invoke `/explore` for the first pass at coarse resolution with the declared input parameters; present the surfaced inventory to the human and ask **which items to drill in the next pass** (no autonomous parent selection — this matches `nav_north_star.md`'s explicit commitment to "manual-trigger v1 is acceptable"); invoke `/explore` signal-first for each selected parent at finer resolution; maintain a frontier ledger file (`_frontier.md`) in the inquiry folder using the candidate-record schema transcluded from `homegrown/protocols/multi_resolution_navigation.md` (the project's existing protocol for frontier-preserving expansion); reference the Cross-Inquiry Merge Contract from `/explore` reference section 5.5 as the manual procedure for combining child maps with the parent map. No automated merge logic in version 1; the human or a downstream session does the merge by reading the procedure.

Approximate effort: one to two focused writing sessions. Net new artifacts: two files (the SKILL.md plus its references file). Net new dependencies: the existing `/multi-resolution-navigation` protocol is referenced, not copied.

**Piece 2 — The canonical-source registry in `_branch.md`, plus the matching per-entry report in `/explore`.** A new `## Canonical Sources` section in the `_branch.md` template (the template lives in the `/MVL+` skill and is replicated in branch-inquiry creation per `homegrown/protocols/branch_inquiry.md`). The section is optional — omit if no canonical sources beyond what's already in Question or Goal. Each entry is a markdown bullet with a path or identifier plus a one-line reason. Authoring guidance is added to the inquiry-framing discipline spec at `enes/runtime_environment/inquiry_framing_discipline.md` (the project's existing discipline for `_branch.md` authoring, currently scoped to question-pre-bias prevention). The guidance carries two rules: the safety-net heuristic ("anything `/explore` might lexically miss") and the Question-and-Goal-references-are-default-canonical rule (no need to re-list things explicitly named in the question or goal).

On the `/explore` side, the spec at `homegrown/explore/references/explore.md` gets an extension describing the per-entry report. The report is a new section in `exploration.md` (the discipline's output file) that appears only when the registry is non-empty. Per-entry format: "registry entry X — surfaced as inventory item N (with ID), or confirmed-absent (with reasoning from confirmed-absent regions), or not-found (no information available)." The match algorithm is **literal-path match for path entries** and **conservative semantic match for concept entries** (with a fall-through "informational only — author to verify" disposition for ambiguous cases). The new section is APPEND-ONLY — it does not modify any existing section of `exploration.md`, so the Merge Contract used by the staged-explore runner continues to work without change.

Approximate effort: one to two sessions. Net new artifacts: a template field, an authoring-guidance section in the framing discipline, and a spec extension in `/explore`.

**Piece 3 — A per-rule × per-run audit of recent `/explore` runs.** A one-session, observation-only check: read the last five-plus exploration output files from recent inquiry folders. For each run, score each of the four existing coverage rules — boundary-discovery, surround-layer-first, confirmed-absent, jump-scan — on whether firing-evidence appears in the file. Firing-evidence signatures are explicit: boundary-discovery requires both an explicit `boundary: unknown` declaration AND a boundary-discovery output section; surround-layer requires the inventory to include at least one item from a project-wide layer (such as something under `homegrown/protocols/` or `enes/`) when one was identifiable; confirmed-absent requires at least one region in the confidence map tagged `confirmed-absent`; jump-scan requires the telemetry to record "jump-scan performed: ✓". The verdict per rule is PASS (firing consistently), FLAG (intermittent), or FAIL (consistently absent when it should fire). If any rule reaches FAIL, that's a separate spec-hardening follow-up; if all PASS, the audit confirms the existing layer-2 mechanisms are intact.

Approximate effort: roughly one session. Net new artifact: an audit report. This piece is **lower priority than the first two** — it diagnoses; it doesn't add new capability. If shipped after the runner and the registry, it provides empirical grounding for whether further coverage work is needed. If shipped before, it may produce a clean audit while the user's actual case is still unresolved.

### 4. The two-layer architecture in action — a worked example

To make the architecture concrete, picture a future inquiry. The author writes `_branch.md` with Question, Goal, Scope Check, and a `## Canonical Sources` field listing two items: `homegrown/explore/references/explore.md` ("the spec being redesigned") and `devdocs/nav_north_star.md` ("the staging-pattern model"). They invoke `/staged-explore` on this inquiry. The runner:

1. Loads `_branch.md`, sees the canonical-source registry.
2. Calls `/explore` for the first pass with default coarse resolution. `/explore` runs its normal scan-signal-probe cycle and produces an `exploration.md` with the regular inventory, confidence map, signal log, plus the new per-entry registry report. The report says: `homegrown/explore/references/explore.md` — surfaced as item N3; `devdocs/nav_north_star.md` — surfaced as item N7. Both registry entries found in the first pass.
3. Presents the inventory to the user: "Here are 10 items at coarse resolution. Which would you like to drill?" User selects items N2 and N5 (which are not on the canonical-source registry but which the user judges interesting at this resolution).
4. Calls `/explore` again signal-first on N2 (and separately on N5), with `parent_pass_anchor` set, at finer resolution. Each call produces a child map; the per-entry registry report appears in each child too (because the registry is read on every pass — though items that have already been surfaced earlier just reference back: "registry entry X — confirmed in parent pass as item N3").
5. Updates `_frontier.md` with all candidates' status. Logs each pass's items_surfaced_count, parent_pass_anchor, and stage_index per the spec's staging-aware telemetry fields.
6. Loops until the user says stop or the max-depth (declared at invocation) is reached.
7. Tells the user to consult the Merge Contract procedure if they want to combine the parent and child maps into one combined view.

Now suppose a registry entry hadn't been surfaced. Say the user listed `homegrown/protocols/multi_resolution_navigation.md` as canonical (because it's structurally relevant) and the first-pass `/explore` didn't surface it. The per-entry report would say: `homegrown/protocols/multi_resolution_navigation.md` — not-found. This is observable. The user sees the miss, can either redirect a subsequent pass to find it, or check whether the absence is correct (maybe the file legitimately isn't in this territory). The miss is no longer silent.

If, in a different scenario, the inquiry's author had forgotten to write a canonical-source registry, `/explore`'s per-entry report would be empty (no entries to check). In that case, `/staged-explore` falls back to standard staged behavior — staging still happens; just no observability over canonical-source coverage. The architecture degrades gracefully. The empty-registry behavior must be explicitly specified in both the runner's spec and `/explore`'s spec (this is one of the pre-ship refinements listed in Next Actions below).

### 5. What this is NOT — boundaries of the answer

This finding does not propose modifying `/explore`'s core mechanics. The four existing coverage rules stay where they are; the audit (Piece 3) checks whether they fire, but does not change them. This finding also does not propose automated merge logic — the Merge Contract at section 5.5 of the `/explore` reference is invoked manually, by the user or by a downstream session reading the procedure. This finding does not propose autonomous parent selection — the runner asks the human at every staging step, deliberately, because the project's calibration-ladder commits to manual-v1 (autonomous selection waits for the L1→L2 gate, which requires ≥10 navigation maps with recorded human selection-rationale).

This finding also does not propose making the canonical-source registry mandatory. It's optional. The runner falls back to standard behavior when the registry is empty. The reason it's optional rather than required is that not every inquiry has a meaningful canonical-source dimension, and requiring an empty section would be friction without benefit. The user can adopt the registry on inquiries where the dimension matters and skip it where it doesn't.

---

## Next Actions

### MUST

- **What:** Ship the thin `/staged-explore` runner skill at `~/.claude/skills/staged-explore/SKILL.md` plus its `references/staged-explore.md` reference file. Behavior per the description in section 3 of this finding: human-in-the-loop parent selection; transclusion of the frontier-ledger pattern from `homegrown/protocols/multi_resolution_navigation.md`; manual Merge Contract reference; explicit graceful-fallback behavior when the canonical-source registry is empty or absent.
  **Who:** A future inquiry-author with shell-and-skill-file write access; one focused writing session.
  **Gate:** Observable — the file `~/.claude/skills/staged-explore/SKILL.md` exists, is invokable, and a test run on this very inquiry's folder produces a parent map plus at least one child map plus a `_frontier.md`.
  **Why:** Closes the documented-but-not-invokable gap in section 7.2 of the `/explore` reference. Without this, the user's "staged run" experience requires hand-orchestration of multiple `/explore` invocations. Shipping this is the single largest experience-improvement available.

- **What:** Add the `## Canonical Sources` field to the `_branch.md` template in `/MVL+`'s skill instructions and in `homegrown/protocols/branch_inquiry.md`; add the safety-net authoring guidance plus the Question/Goal-default rule to `enes/runtime_environment/inquiry_framing_discipline.md`; extend `homegrown/explore/references/explore.md` to describe the append-only per-entry report including the match algorithm (literal-path for paths; conservative semantic for concept entries).
  **Who:** A future inquiry-author with write access to those four files; one to two focused sessions.
  **Gate:** Observable — at least one new `_branch.md` exists with the `## Canonical Sources` section populated, AND at least one `exploration.md` includes a per-entry registry report.
  **Why:** This is the upstream half of the two-layer coverage mechanism. Without it, no design inside `/explore` can guarantee canonical-source non-miss, because "canonical" is a property of the inquiry's author, not the territory. The per-entry report converts silent misses into observable events.

- **What:** Specify graceful behavior for the empty-registry case in both the runner spec and `/explore`'s spec. The runner falls back to standard staged behavior; `/explore`'s per-entry report is omitted (not "empty") when no registry exists.
  **Who:** Included as part of the first two MUST items; not a separate deliverable.
  **Gate:** Observable — both specs explicitly state the empty-registry behavior in a section the reader can find.
  **Why:** Without this, the runner and `/explore` would have undefined behavior on the most common case (no canonical-source registry declared), which is the failure-case scenario surfaced in critique's adversarial evaluation.

- **What:** Specify the per-entry match algorithm in `/explore`'s spec — literal-path match for path entries; conservative semantic match for concept entries; "informational only — author verifies" fall-through for ambiguous cases.
  **Who:** Included as part of the second MUST item.
  **Gate:** Observable — the algorithm is named in the spec with one worked example per case.
  **Why:** Without an explicit match algorithm, the per-entry report can produce false positives (a variant filename matches the intended canonical) or false negatives (a renamed file isn't matched). The user's trust in the report depends on its consistency.

### COULD

- **What:** Add a one-line prompt to `/MVL+`'s Scope Check section: "Consider whether your inquiry has canonical sources `/explore` might lexically miss. If so, list them in `## Canonical Sources`."
  **Who:** The same author handling the second MUST item; ten extra minutes during that session.
  **Gate:** Observable — the prompt appears in the `_branch.md` template alongside the existing Scope Check guidance.
  **Why:** Forces a conscious-consideration moment without making the registry mandatory. Reduces the chance an author silently skips the registry for inquiries where it would matter. Optional because authors who have read the inquiry-framing discipline already know to consider this; the prompt is for new authors.

- **What:** Phrase the user-facing rollout of the canonical-source registry as "you now have a record of what `/explore` was supposed to find — optional to declare, useful for interpretation," NOT as "please list canonical sources for every inquiry."
  **Who:** Whoever writes the changelog or update note announcing the new template field.
  **Gate:** Observable — the rollout language emphasizes observability gain, not authoring burden, in the message the user first reads.
  **Why:** The author-declaration shift was the load-bearing objection in the inquiry's critique phase. The structural argument for the shift is correct, but if the rollout language frames it as a chore, authors will skip the registry and the safety-net protection won't engage.

- **What:** Run the per-rule × per-run audit on the last five `/explore` runs to verify the four existing coverage rules fire as designed. Score with the signature definitions described in section 3 of this finding. If all four PASS, file the audit and proceed with monitoring. If any FAIL, open a separate spec-hardening inquiry.
  **Who:** A future inquiry-author; one focused session.
  **Gate:** Time-bound — within thirty days of shipping the first two MUST items, OR observable — if the registry-and-runner reach five inquiries' worth of use without a canonical-source-miss being reported, that's evidence the layer-1 mechanism is doing its job and the layer-2 audit is less urgent.
  **Why:** Empirical grounding for whether the existing rules are doing their job. Lower priority than the first two MUST items because it's diagnostic rather than constitutive. Could become urgent if user reports canonical-source-miss persisting even when the registry is filled correctly — that would point at layer 2 (rule firing).

### DEFERRED

- **What:** A doc-only fallback — replace the runner skill with worked-example documentation inside the `/explore` reference if the runner proves unused.
  **Gate:** Observable — if `/staged-explore` proves unused for more than five inquiries after shipping, revert to doc-only and remove the skill.
  **Why (if revived):** Cheapest possible state. Honest about actual usage rather than maintaining a skill nobody invokes.

- **What:** An author-cross-reference co-audit — for any rule the per-rule audit produces a FLAG verdict on, ask 3–5 recent inquiry-authors whether `/explore` missed anything they consider canonical in those runs.
  **Gate:** Condition-bound — only if the per-rule audit produces a FLAG verdict on any of the four rules.
  **Why (if revived):** Catches the false-negative case (the rule fired correctly but the run still missed something the author expected). Author "yes I expected X" is the ground truth that firing-evidence alone cannot establish.

- **What:** A negative-space audit pass added to `/explore` — post-convergence, check which category-types have zero representation in the inventory against a pre-declared taxonomy.
  **Gate:** Condition-bound — if the per-rule audit reveals category-level miss patterns, OR observable — if two or more user reports indicate "/explore missed a kind of thing it shouldn't have missed" within a quarter.
  **Why (if revived):** Complements the canonical-source registry (which is item-level) by adding category-level absence detection. Stops the system from silently producing a thorough-looking map that's missing an entire kind of item.

- **What:** A `flow-staged: yes|no` field in `_state.md` (the inquiry's state file) that routes `/MVL+` to invoke `/staged-explore` at its Exploration step instead of `/explore` directly.
  **Gate:** Compound — `/staged-explore` has shipped AND at least three hand-orchestrated `/staged-explore` inquiries have been completed showing the pattern is useful in practice.
  **Why (if revived):** Lets the user opt into staged exploration at inquiry-creation time without invoking the runner manually. The compound gate exists because routing logic before the underlying runner is stable would be premature optimization.

---

## Reasoning

### Why the architectural decision over the alternatives

The strongest alternative to "staging in a runner" was the user's literal proposal: **bake the staged for-loop into `/explore` itself**. This alternative was killed in critique on three independent structural grounds, not on precedent. The grounds are mechanism: `/explore`'s per-invocation contract is one Transform; consumers actually read that single-map shape; multi-pass output is a different shape that breaks those consumers. The grounds are pattern: every existing runner in the project follows the discipline-vs-runner separation; making `/explore` an exception requires special-case justification that does not exist. The grounds are trajectory: future autonomy gains live at the runner level, and burying staging logic inside the discipline forecloses that path. The first ground alone is sufficient; the three together are over-determining.

A second alternative considered was **adding a `--staged` flag to `/MVL+`** so that the pipeline runner handles staging internally. This was killed because `/MVL+` orchestrates five different disciplines and is structurally different from a discipline-level orchestrator that handles multi-pass calls of one discipline. Mixing pipeline orchestration with discipline-level multi-pass orchestration violates the same surround layer as putting staging in `/explore`. The seed extracted from this kill became the deferred `flow-staged` routing field, which addresses the legitimate underlying question (when should `/MVL+` route to `/staged-explore`?) at the right layer.

A third alternative was **shipping doc-only guidance** — update `/explore`'s spec section 3.6 with worked manual-staging examples, no new skill. This was deferred rather than killed, with revival trigger: revert to doc-only if the runner proves unused. The reason for deferring rather than killing is that it's a legitimate end state if usage data shows the runner is overhead-without-benefit, which is a question only empirical evidence can answer.

A fourth alternative was a **full auto-select runner** with policy-driven parent selection per the multi-resolution-navigation protocol. This was placed in the Research Frontier with a clear revival trigger (at least five thin-runner runs with recorded selection-rationale data, matching the project's L1→L2 autonomy-ladder gate). The reason for not shipping this in version 1 is calibration-state mismatch: the project's documented stance (in `nav_north_star.md`) is that manual-trigger v1 is acceptable, and autonomous selection without calibration data risks miscalibrated routing.

### Why the coverage decision is two-layer rather than one

The strongest alternative to the two-layer model was **"`/explore` alone can guarantee canonical-source non-miss"** — keep all the mechanisms inside `/explore`; harden the existing rules; do not push any responsibility to inquiry-framing. This was killed in sensemaking on the structural grounds that "canonical" is, in the user's sense, an externally-determined property. `/explore` reads the territory it's given; it cannot infer which sources in that territory matter for THIS specific inquiry without being told. The exploration discovered this through the Frame-exit Completeness perspective check — the inquiry's frame had implicitly excluded a referent (the inquiry-framing layer where canonical-determination happens) that turned out to be load-bearing. The seed extracted from the kill became Layer 1 of the two-layer model.

A second alternative was **"the existing four rules are enough, no registry needed"** — trust the rules to surface canonical content as part of their normal scanning. This was killed in critique on the failure-case scenario: a canonical source X that's structurally relevant but lexically not surface-near to the question text can fail every rule. The rules surface what stands out in the territory; "what stands out" is determined by signal-detection (density, novelty, relevance, tension, absence), and a source that's relevant-but-lexically-distant may not produce strong signals. The rules are necessary but not sufficient.

A third alternative was **embedding the canonical-source registry inside the existing Scope Check section** of `_branch.md`. This was killed in innovation because Scope Check's role is question-vs-goal alignment (does the question cover the goal?), and required-touch is source-coverage (does the territory include the must-touch sources?). The concerns are different; conflating them weakens Scope Check's primary purpose. The seed from this kill was preserved as a frontier question: is there a shared abstraction over scope-fit and source-coverage that would unite them honestly? Not surfaced; not pursued.

A fourth alternative was **parsing Goal text for path-like patterns** and treating any path mentioned in Goal as automatically canonical (no separate registry field). This was killed in innovation as brittle — Goal text may name concepts rather than paths, may use natural-language references, and may rely on the LLM's loose parsing. Brittleness fails the safety-net purpose. The seed was preserved as the Question-and-Goal-references-default-canonical sub-rule within the safety-net guidance — meaning the rule survives as a piece of authoring guidance ("you don't need to re-list things named in Question or Goal") but does not replace the explicit registry.

### Reconciliation across the upstream disciplines

Exploration surfaced fourteen candidate designs across eight regions of the design space. Sensemaking adjudicated two ambiguities at HIGH confidence — the architectural decision (staging-in-runner) and the coverage reframing (two-layer). Decomposition partitioned the resulting work into five pieces with explicit interfaces; one hidden coupling (the per-entry report's effect on the Merge Contract's expected output shape) was surfaced and converted to an explicit interface constraint ("append-only; downstream consumers pass through unknown sections"). Innovation generated thirteen concrete candidates per piece and applied the assembly-check phase to find the Canonical Coverage Stack architecture as the emergent-value combination. Critique tested the assembly on eleven evaluation dimensions including four project-specific risk axes (duplicate-derivable-state, operation-parsimony, phase-fit, explicit-culture-fit) and one user-perspective dimension; the assembly survived all six critical-weight dimensions with four pre-ship refinement targets.

The disciplines did not contradict each other. The progression refined the answer rather than reversing it. The architectural decision was clearer after the surround-layer argument from sensemaking; the coverage decision was sharper after the Frame-exit Completeness perspective surfaced the inquiry-framing layer; the assembly architecture became visible only after decomposition partitioned the pieces. Each discipline added structure the previous did not have.

### What was committed without strong evidence (honest hedges)

Two commitments in this finding rest on calibration-state inference rather than evidence:

- **The per-rule audit's signature definitions** are calibration-state-flagged. The signatures (e.g., "C4 requires telemetry to include 'jump-scan performed: ✓'") work for `/explore` outputs that follow the current spec. Older outputs from before the spec stabilized may not include these telemetry lines. The audit will produce N/A verdicts (rather than FAIL) on runs where the signature is structurally unobservable. This is conservative-by-design: an N/A is not the same as a failure.

- **The match algorithm for the per-entry registry report** distinguishes literal-path entries from concept entries, but the boundary between them is judgment. A registry entry like "the staging pattern from nav_north_star.md" is a concept reference even though it mentions a filename. The fall-through to "informational only — author verifies" handles the boundary cases honestly, but means a fraction of registry entries will produce informational rather than conclusive reports. This is an acceptable tradeoff: over-claiming would be worse than under-claiming.

These two hedges are named specifically because they're what's actually uncertain. The architectural decision (staging-in-runner) is not hedged — it's over-determined. The coverage decision (two-layer) is not hedged — it follows from the structural decomposition of "canonical."

---

## Open Questions

### Monitoring

- After five inquiries use the canonical-source registry, check whether the per-entry report has actually surfaced any miss events (entries marked "not-found" or "confirmed-absent") that the user judged as real misses worth following up on. If zero misses surface, that's either evidence the registry is working preventively, or evidence the registry isn't being used seriously enough to matter — examine which is the case and decide whether to harden or simplify.

- After three hand-orchestrated `/staged-explore` runs accumulate selection-rationale data (the user's one-sentence reason for each parent selection), check whether the rationales are repetitive enough to suggest an autonomous selector could replicate them with high agreement. If yes, that's the calibration data the L1→L2 autonomy gate requires; the deferred auto-select runner becomes a candidate for the next iteration.

### Blocked

- A formal `_branch.md` typed schema is blocked on the project's broader move toward typed inquiry artifacts (per `enes/runtime_environment/folder_based.md`). The canonical-source registry uses markdown bullets in the current shipping plan; if the project later adopts a typed schema, the registry's typed shape becomes a separate small migration.

### Research Frontiers

- A **single-artifact unified design** combining staging, registry, and audit into one new object was flagged as unexplored but topologically improbable (it would violate the surround-layer pattern in the same way the rejected `--staged` flag does). No known path to it without sacrificing the discipline-vs-runner separation. Preserved here because the design-space-completeness check noticed the gap; not pursued because the structural argument is strong.

- **`/explore` self-detection of canonical sources** — could a design exist where `/explore` figures out what's canonical for THIS inquiry without being told? The structural argument is that "canonical" requires an external referent, but it is logically conceivable that `/explore` could read the inquiry's broader context (Question, Goal, prior corrections from related inquiries) and infer canonical sources without an explicit registry. No known mechanism for this, and the inference would face the same lexical-distance problem the registry was introduced to address. Preserved as a research-frontier-possibility; not blocking.

- The **purely-deterministic-prescan** approach (run a filesystem listing or project-index call before LLM-based scanning, pass the listing as boundary input) was surfaced in exploration but deferred. It would address canonical-source-miss differently: by ensuring `/explore` cannot miss what it was forced to see at boundary-discovery time. Not pursued in version 1 because the two-layer model achieves the same outcome (observability) with less complexity. Revival trigger: if the registry mechanism proves cognitively burdensome for authors despite the safety-net framing, the deterministic-prescan alternative becomes worth re-examining as a registry-replacement.

### Refinement Triggers

- The **decision to make the canonical-source registry optional** re-opens if more than two user reports surface where canonical-source-miss occurred specifically because the author forgot to fill the registry. Two-plus instances would suggest the optional default isn't safe; mandatory-with-empty-allowed becomes a candidate.

- The **shape of the per-entry report** (append-only section in `exploration.md`) re-opens if downstream consumers (sense-making, decompose) start consuming the report's content structurally rather than just informationally. At that point, the report becomes part of the typed-output contract and needs first-class spec treatment rather than the current append-only convention.

- The **human-in-the-loop parent selection** in `/staged-explore` re-opens at the L1→L2 autonomy-ladder gate — five or more recorded selection-rationales with high inter-rationale consistency. At that point, the deferred auto-select runner becomes a candidate.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
okay , how can we make sure explore indeed explores and surfaces all relevant content? and not randomly?

Canonical-source content can be missed ?  explore should work in such way that it shuldnt miss them? maybe a staged run like devdocs/nav_north_star.md


### Staged iteration (the for-loop structure)

A single whole-codebase navigation run is heavy — it has to enumerate the codebase. LLMs are not good at producing one huge accurate output. The solution is to stage the work into iterations, using a for-loop-like structure:

- **First run** produces the big concepts in the codebase. Say it surfaces 10 high-level directions.
- **Second run** takes each of those 10 big concepts and discovers the smaller concepts around it. For each big concept, second-run navigation might find 5-10 sub-concepts. Total after the second round: maybe 50-100 nodes at finer resolution.
- **Third run** does the same one resolution deeper. Total might grow to ~200 nodes.

This is heavy in absolute work but achievable because each individual navigation call is bounded. The structure is "loop over the prior round's nodes; run a new navigation on each one."


and this way we can see what is being surfaced or not...  


SO i am thinking explore should create a map like output of relevant concepts at first,and then should go and read surrounding context of this concept one by one .

what do you think ?
```

</details>
