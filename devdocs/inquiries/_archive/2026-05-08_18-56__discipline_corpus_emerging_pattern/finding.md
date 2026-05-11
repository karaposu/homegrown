---
status: active
---
# Finding: Discipline-corpus emerging pattern

## Question

Across the cumulative bolted-on rules, addendums, and cross-cutting checks added to the homegrown discipline specs over time, what unnamed pattern (or set of patterns) is emerging — and is there a corpus primitive, paradigm, or protocol hiding in plain sight that, once named and tidied, would make the corpus cleaner, easier to extend, and easier to maintain?

**Goal:** name the strongest 1–3 emerging patterns + propose concrete tidying artifacts; distinguish "load-bearing and ready to formalize" from "real but premature." The user should be able to read the finding and decide per pattern: *"yes, formalize it — here's the artifact I'll commission"* or *"interesting but not yet — defer with this revival trigger."*

## Finding Summary

- **Two named patterns are emerging in the discipline corpus, both ready for descriptive formalization at this calibration state.** A third candidate (the user's hypothesis: a per-discipline output protocol analogous to CONCLUDE) was tracking real territory but collapses into existing structure plus the second of these two patterns — no third artifact warranted.

- **Pattern A — "Step Refinement" (host primitive).** A step-anchored rule with a uniform 4-element shape: **name** (bold prefix) + **trigger condition** + **required action** + **typed anchor-link**. Anchor-link points to either a named failure mode (failure-anchored subtype, dominant — 8 of 10 catalogued instances) or a structural completeness concern (coverage-anchored subtype, minority — 2 of 10). Subsumes three exploration candidates (the bolted-on-rule pattern, the multi-axis-coverage pattern, and the failure-mode-prevention-map pattern) into one corpus object viewed from three angles. Visual marker is the prior inquiry's C3.4 italic prefix `*Refinement note (applies at [Step / Phase / Component]):*`.

- **Pattern B — "Discipline Output Contract."** Every discipline output exposes a verdict line in the canonical form `**Verdict:** [PROCEED | FLAG | RE-RUN] [— optional descriptor]` plus standardized structural sections. The verdict TYPE is mandatory and unambiguous; the descriptor is free-form and may carry qualitative hedging (e.g., `**Verdict:** PROCEED — saturation moderate; three perspectives produced new anchors`). Currently observed in 3 of 8 disciplines (innovate, td-critique, navigation); the 5 disciplines without verdict lines (sense-making, explore, decompose, comprehend, reflect) are the rollout target. The protocol `homegrown/protocols/resume.md` already aspires to this contract and currently uses a "fall back to PROCEED" backward-compat as the workaround.

- **Artifacts: two new files, one rollout strategy.**
  - **Pattern A** lands as a new file `enes/step_refinement.md` defining the primitive, its 4-element shape, its two subtypes (with corpus examples), and its visual marker. Lighter alternative: a glossary entry in `enes/glossary.md` (less preferred — splits content across files).
  - **Pattern B** lands as a new file `homegrown/contracts/discipline_output.md` modeled on the existing `homegrown/contracts/alignment_control.md` style. Defines the canonical verdict format, the 3-section minimum (`## User Input` start; body; `## Self-Assessment` end with verdict line), and notes resume.md's backward-compat with the existing `**Overall:**` prefix during rollout.
  - **Rollout strategy** for closing the verdict-line gap: pilot on sense-making first (it's the hardest test for the hedging-allowed format because its self-assessment is most qualitative); after pilot validates, the remaining 4 disciplines close the gap incrementally via touch-as-worked-on, ideally bundled with the prior inquiry's refactors when those touch a discipline.

- **The user's hypothesis (per-discipline output protocol analogous to CONCLUDE) was correct that "something is there"; the inquiry names what was there.** The MVL+ Workspace Invariant (in `homegrown/MVL+/SKILL.md`) already covers most of what a per-discipline output protocol would do at the runner level — it specifies "load only the current discipline's spec, write only the canonical output file, attempt structural check, update _state.md." The remaining gap maps to Pattern B (the verdict-line and structural-sections contract). The discipline-specific compilation logic (sense-making's SV-progression; td-critique's fitness landscape; etc.) is genuinely per-discipline and stays in each `references/X.md`. No new protocol file is needed.

- **Formalization is descriptive only at this calibration state.** Both new files are specs (definitions, shapes, examples, cross-references) — not linters, validators, or mechanical schema validation. Existing instances align organically as touched. The user's "brushing teeth" framing is honored: name what's already implicitly there; tidy where useful; don't reach for heavy machinery.

- **A meta-spec cluster is becoming visible at the corpus level.** The placement convention (already in `enes/discipline_rule_placement.md`), Step Refinement (new), and Discipline Output Contract (new) together form a recognizable layer of "specifications about how disciplines are structured." Cross-referencing them all from `enes/discipline_taxonomy.md` is **deferred** until the new files have shipped and survived 30 days of use without re-edit — premature codification of the cluster would suppress useful variation.

## Finding

### Why this matters

The homegrown project has been organically accreting refinements to its thinking-discipline specs over time. Each refinement — sense-making's "Load-bearing concept test," explore's "Type-Aware Probing," decompose's "Determination-mechanism piece check," td-critique's "Multi-axis prosecution depth check," and others — was added at a specific point in a specific discipline's process model to prevent a specific failure pattern that someone observed in an actual run. The accretion is real (10 catalogued instances across 6 disciplines, with sense-making's Phase 3 a hot-spot containing 3 of them) and it shows no sign of slowing. The user's question is whether anything is emerging from these accretions that should be named — a primitive, a paradigm, a protocol — so that future maintenance is easier and the corpus doesn't drift.

The user's framing was important: *"in development we need constant cleaning and refactors, like brushing your teeth every morning."* The inquiry treated this as a constraint — favor descriptive maintenance over heavy machinery; preserve organic emergence; avoid premature codification. Sensemaking's phase-fit conservatism (carried forward from the prior inquiry `devdocs/inquiries/2026-05-08_17-23__discipline_spec_bloat_reasons/finding.md`) made this concrete: at early calibration, name what's observably emergent; defer rigid schemas until evidence of insufficiency accumulates.

The exploration mapped 8 candidate patterns, and three of them collapsed into one host primitive viewed from three angles. The other one ready for naming was independent. That gives the inquiry's two named patterns.

### 1. Pattern A — Step Refinement (host primitive)

**Definition:** a Step Refinement is a rule attached to a specific step, phase, or component within a discipline's process model. It has a 4-element shape:

1. **Name** — a bold prefix on the first line, identifying the rule (e.g., `**Type-Aware Probing.**` in explore's Probe component; `**Load-bearing concept test.**` in sense-making's Phase 3 Ambiguity Collapse).
2. **Trigger condition** — the condition under which the rule applies (e.g., "when the coarse scan inventories a candidate that carries a load-bearing quantifiable claim"; "when load-bearing concepts have been stabilized in earlier output").
3. **Required action** — what the discipline must do when the trigger fires (e.g., "at least one empirical probe of the quantifiable claim is required"; "generate at least one ambiguity-collapse pair testing each load-bearing concept").
4. **Typed anchor-link** — a link to either (a) a named failure mode the rule prevents, or (b) a structural completeness concern the rule enforces. The anchor-link is what makes the rule non-arbitrary: it explains *why* the rule exists.

**Two subtypes:**

- **Failure-anchored** (dominant — 8 of 10 catalogued instances). The anchor-link points to a named failure mode in the discipline's failure-mode catalog. Example: sense-making's "Load-bearing concept test" has the link *"Failing to generate at least one ambiguity-collapse pair per load-bearing concept is an instance of Premature Stabilization (failure mode #2)."*
- **Coverage-anchored** (minority — 2 of 10 catalogued instances). The anchor-link points to a structural completeness concern without naming a single failure mode. Example: innovate's "Axis coverage check" enforces that candidate sets vary along orthogonal axes — it doesn't prevent a uniquely-named failure mode; it ensures structural completeness.

**Visual marker:** the prior inquiry (`devdocs/inquiries/2026-05-08_17-23__discipline_spec_bloat_reasons/finding.md`) proposed an italic prefix `*Refinement note (applies at [Step / Phase / Component]):*` as a typographic convention to distinguish refinements from the spine of a process step. That convention is the visual application of Step Refinement — the prefix is the recognizable surface where the primitive lives. Naming the primitive consistently with the visual marker (`Step Refinement` ↔ `Refinement note`) reinforces the connection.

**Why this name.** "Step Refinement" was chosen over alternatives ("Step Rule" — too generic; "Failure-Anchored Rule" — excludes the coverage-anchored subtype; "Anchor Rule" — collides with sense-making's "cognitive anchors"). The two-word name combines step-placement semantics (where the rule lives, per the placement convention's canonical-home rule) with refinement-accretion semantics (these rules are added over time to refine the existing process). The load-bearing concept test confirmed it as a project-coined name fitting an unnamed corpus primitive — there's no existing term in the corpus for these objects.

**The inverse map (failure-mode prevention map) is a byproduct.** Once Step Refinements have a uniform 4-element shape with the typed anchor-link, the corpus becomes machine-traversable in two directions: rule → failure-mode (already stated explicitly in each rule) and failure-mode → rules-that-prevent-it (derivable by collecting rules whose anchor-link names that failure mode). This second direction is currently navigable only by grep; with the primitive named, a future tool could auto-generate the inverse map. Naming Pattern A delivers this for free.

### 2. Pattern B — Discipline Output Contract

**Definition:** every discipline output (the file saved as `<discipline>.md` in an inquiry folder, e.g., `sensemaking.md`, `innovation.md`) must expose:

- A **verdict line** in the canonical form `**Verdict:** [PROCEED | FLAG | RE-RUN] [— optional descriptor]`. The verdict TYPE is mandatory and unambiguous (one of the three values); the descriptor is optional and free-form and may carry qualitative hedging.
- Standardized **structural sections**: at minimum, a `## User Input` section at the start, a body section (discipline-specific), and a `## Self-Assessment` section at the end containing the verdict line.

**Why now.** The protocol `homegrown/protocols/resume.md` already aspires to this contract — its design assumes every discipline output produces a verdict line that resume.md reads to decide PROCEED / FLAG / RE-RUN routing. resume.md currently includes a "fall back to PROCEED with NOTE" backward-compat clause for outputs without a verdict line, which is the workaround for an open contract. Three of the eight catalogued disciplines (innovate, td-critique, navigation) already produce verdict-equivalent telemetry; the other five (sense-making, explore, decompose, comprehend, reflect) have qualitative self-assessment or none. Closing the gap — making the contract explicit and rolling it out — converts the resume.md backward-compat into a true protocol.

**Why hedging is allowed.** Sense-making's saturation indicators are explicitly "not gates"; explore's convergence criteria are qualitative; decompose's self-evaluation produces PASS/FAIL per dimension but no overall judgment. Forcing a strict verdict format on these disciplines would either mechanize a judgment that's genuinely subjective (false precision) or produce verdict lines the runner can't trust. The hedging-allowed form solves this: the verdict TYPE is unambiguous (the runner can extract it); the descriptor carries qualitative content (the human or future runner reads it for nuance).

For example, after a sense-making run where saturation was approached but not fully reached, the verdict line could read:

```
**Verdict:** PROCEED — saturation moderate; three perspectives produced new anchors,
ambiguity resolution ratio 6/6, SV1→SV6 delta substantial.
```

The TYPE is PROCEED — unambiguous. The descriptor explains the qualitative state. resume.md routes on the TYPE; the human or follow-up tooling reads the descriptor.

**Where the contract lives.** New file `homegrown/contracts/discipline_output.md`, modeled on the existing `homegrown/contracts/alignment_control.md` (Loading note + Purpose + Non-goals + Contract definition + Record shape + Failure modes + Short version). The `homegrown/contracts/` directory is the canonical home for shared vocabulary contracts in the corpus; placing the new contract there makes it discoverable to runners and future-discipline authors without ambiguity.

### 3. The user's hypothesis honored

The user proposed a "per-discipline output protocol" analogous to CONCLUDE. The intuition was correct that something output-related was emerging; the specific artifact wasn't quite right because:

- The runner-level framing of per-discipline output (record user input, save to canonical filename, run structural check, update state) is **already specified** in the MVL+ Workspace Invariant section of `homegrown/MVL+/SKILL.md`. Lifting that to a separate protocol file would duplicate, not extract.
- The output-contract aspect (what every discipline must expose for resume.md consumption) is real and is what Pattern B addresses.
- The discipline-specific compilation logic — how sense-making produces SV1→SV6, how td-critique builds the fitness landscape, how innovate runs the seed-generate-test cycle — is **genuinely per-discipline** and lives in each `references/<discipline>.md`. It can't be unified into one protocol without either lossy abstraction or per-discipline templates that re-state the references files.

The inquiry's response to the user's hypothesis is therefore: **the territory the intuition was sensing maps to MVL+ Workspace Invariant + Pattern B + per-discipline references files. No new protocol file warranted.** The user's instinct is honored by naming what they sensed; redirecting away from the specific artifact form they imagined preserves the simpler corpus structure.

### 4. Why two patterns, not one

The exploration's instinct to name the host primitive (Pattern A) and the output contract (Pattern B) as separate things was tested in sensemaking against the strongest counter-reading: that both might be aspects of one deeper "Discipline Spec Contract" covering both rule shape and output shape.

The counter partially succeeds at high abstraction — both ARE about how disciplines structure their content. They share a meta-shape ("discipline specs accrete uniform shapes for organic emergent needs"). But at the artifact level they're independent: a Step Refinement is a rule INSIDE a discipline spec (read by the LLM running the discipline during execution); the Discipline Output Contract is about what the discipline PRODUCES (read by the runner / future LLM after). Different surfaces, different consumers, different artifacts.

Forcing them under one umbrella would obscure the artifact distinction and create a vague concept that's harder to apply. Two patterns, two artifacts, two verdicts. The deeper unifying observation ("the corpus accretes uniform shapes for emergent needs") is recorded as a frontier observation, not a primary artifact.

### 5. What this finding does NOT propose

To make the descriptive-only ethos concrete:

- **No mechanical enforcement.** No linters, no validators, no schema validation that blocks non-conforming inputs. The artifacts are specs; existing instances align organically when next touched.
- **No blanket retroactive editing.** The 5 disciplines without verdict lines do not all get edited in one pass. Pilot sense-making first; rest follow as they're touched. resume.md's backward-compat handles untouched disciplines indefinitely.
- **No new protocol file for the user's hypothesis.** The collapse of the user's candidate (#2) is a deliberate non-action.
- **No corpus-wide cross-reference cluster yet.** Adding cross-references in `enes/discipline_taxonomy.md` linking the placement convention + Step Refinement + Output Contract is deferred until the new files have shipped and survived 30 days. Premature codification would lock the cluster before evidence supports it.
- **No retroactive failure-mode link addition for the 2 innovate outliers.** The coverage-anchored subtype accommodates innovate's "Output disposition categories" and "Axis coverage check" as-is; they don't need to invent a failure-mode link they don't currently have.

## Next Actions

### MUST

- **What:** Create `enes/step_refinement.md` defining the Step Refinement primitive — its 4-element shape (name / trigger / action / typed anchor-link), its two subtypes (failure-anchored, coverage-anchored, with corpus examples drawn from the audit in this inquiry's exploration.md), and its visual marker (the C3.4 italic prefix from the prior inquiry). Include explicit scope statement: "descriptive only; existing rules align organically when next touched; visual marker recommended for new rules; rollout details in this inquiry's Q3 strategy."
  **Who:** human-driven spec edit (or a future materialization run via `homegrown/protocols/artifact_materialization.md`).
  **Gate:** apply once; verify cross-reference from `enes/discipline_rule_placement.md` (one-line addition pointing to the new file).
  **Why:** names the host primitive so future bolted-on rules can be added with a known shape; produces the failure-mode prevention map's inverse navigation as a byproduct (machine-traversable rule⇄failure-mode mapping).

- **What:** Create `homegrown/contracts/discipline_output.md` defining the Discipline Output Contract — the canonical verdict format `**Verdict:** [PROCEED | FLAG | RE-RUN] [— optional descriptor]` (TYPE mandatory and unambiguous; descriptor free-form), the 3-section minimum (`## User Input` start; body; `## Self-Assessment` end), and the resume.md backward-compat note for the existing `**Overall:**` prefix during rollout. Model the file on `homegrown/contracts/alignment_control.md`'s structure.
  **Who:** human-driven spec edit.
  **Gate:** apply once; verify cross-reference from `homegrown/protocols/resume.md` (one-line addition pointing to the new contract file).
  **Why:** closes the open contract that resume.md's backward-compat currently works around; enables telemetry-aware iteration as a first-class capability; provides the spec new disciplines adopt from inception.

- **What:** Apply pilot rollout — add the verdict line to **sense-making's** discipline output (modify `homegrown/sense-making/references/sensemaking.md` — likely the Saturation Indicators section — to produce a `**Verdict:** PROCEED [— qualitative descriptor]` line at the end of every sensemaking output).
  **Who:** human-driven spec edit.
  **Gate:** apply once; verify by running sense-making on a test inquiry; confirm the verdict line is parseable (TYPE = PROCEED|FLAG|RE-RUN unambiguously) AND carries useful qualitative content in the descriptor.
  **Why:** sense-making is the hardest test for the hedging-allowed format because its self-assessment is most qualitative. If hedging works for sense-making, it works for the more-structured disciplines (explore, decompose, comprehend, reflect). Validates the contract's format before scaling.

### COULD

- **What:** Apply lighter-weight alternative for Pattern A — a glossary entry in `enes/glossary.md` (creating it if it doesn't exist) instead of a full file `enes/step_refinement.md`. Visual marker spec lives separately in placement convention.
  **Who:** human-driven spec edit, alternative to the MUST item above.
  **Gate:** select only if `enes/step_refinement.md` (the MUST primary) feels too heavy.
  **Why:** more conservative; minimum-sufficient artifact. Trade-off: discoverability cost — content is split across two files.

- **What:** Bundle the verdict-line addition for the remaining 4 disciplines (explore, decompose, comprehend, reflect) with the prior inquiry's refactor application (C1.1, C2.2, C3.4 from `devdocs/inquiries/2026-05-08_17-23__discipline_spec_bloat_reasons/finding.md`).
  **Who:** human-driven spec edit, applied incrementally.
  **Gate:** when a discipline is touched for the prior inquiry's refactors, also add the verdict line per the new contract.
  **Why:** efficient — one touch per discipline closes both inquiries' gaps. resume.md backward-compat handles disciplines not yet touched.

### DEFERRED

- **What:** Add cross-references in `enes/discipline_taxonomy.md` linking the placement convention, Step Refinement, and Discipline Output Contract as the corpus's "discipline meta-spec" cluster.
  **Gate:** after `enes/step_refinement.md` and `homegrown/contracts/discipline_output.md` are both shipped AND survive 30 days of use without re-edit or complaint.
  **Why if revived:** establishes the meta-spec layer as a discoverable cluster; enables future meta-spec primitives (a hypothetical 4th, 5th) to drop into the same index point. Premature codification before per-piece evidence would suppress useful variation.

- **What:** Add an audit table to `enes/step_refinement.md` listing every Step Refinement currently in the corpus by discipline / step / anchor-link / subtype.
  **Gate:** when tooling exists to auto-generate the audit (e.g., a script that greps for the italic-prefix `*Refinement note:*` pattern across the corpus and emits a table).
  **Why if revived:** discoverability + maintenance backstop. Hand-maintained audit drifts; auto-generated stays accurate.

## Reasoning

### Why "Step Refinement" over alternatives

The naming was tested against the load-bearing concept test (per the sense-making spec): is the chosen name a project property or an external default? The alternatives failed on different grounds:

- **"Step Rule"** — too generic; doesn't signal the failure-anchoring or refinement-accretion semantics. An external default name without project-specific meaning.
- **"Refinement Rule"** — emphasizes accretion correctly, but loses the canonical-home (step) semantics that connect to the placement convention.
- **"Failure-Anchored Rule"** — captures the dominant subtype precisely, but excludes the 2 coverage-anchored outliers (innovate's "Output disposition categories" and "Axis coverage check"). Wrong fit.
- **"Anchor Rule"** — concise and captures dual-anchoring, but collides with sense-making's "cognitive anchors" (term already taken in the corpus).
- **"Step Refinement"** — combines step-placement and refinement-accretion; doesn't collide; connects to the prior inquiry's C3.4 visual marker (`*Refinement note:*` italic prefix). The corpus is already moving toward "Refinement" as the visual vocabulary; aligning the primitive name reinforces the connection. Project-coined; project-specific; load-bearing.

### Why two patterns, not one (revisited)

Sense-making tested the unifying counter-reading ("Discipline Spec Contract covers both") and found that while a higher-abstraction unification exists, at the artifact level the patterns are independent. A Step Refinement is read by the LLM running the discipline (mid-execution); the Discipline Output Contract is read by the runner after the discipline produces output. Different consumers, different surfaces, different artifacts. Forcing one umbrella would create a vague concept harder to apply.

The deeper unification ("the corpus accretes uniform shapes for emergent needs") is recorded as a frontier observation, not promoted to an artifact in this inquiry.

### Why descriptive-only formalization

The phase-fit caveat from the prior inquiry's finding (`devdocs/inquiries/2026-05-08_17-23__discipline_spec_bloat_reasons/finding.md`) carries forward: the homegrown corpus is at early calibration. 10 instances of the host primitive and 8 disciplines worth of output structures are enough evidence for the SHAPE to be observable; not enough for mechanical enforcement (linters, validators) to be safe. Conservative-default reasoning: descriptive specs that establish the going-forward expectation; existing instances align organically; defer prescriptive enforcement until evidence shows minimum-viable is insufficient.

### Why pilot = sense-making

Sense-making's saturation indicators are explicitly qualitative ("indicators are not gates"). It's the discipline whose self-assessment most resists strict verdict format. If the hedging-allowed format works for sense-making (validates that "**Verdict:** PROCEED — saturation moderate" is parseable AND informative), the format works for the more-structured disciplines (explore's convergence criteria; decompose's self-eval; comprehend's confidence map; reflect's per-step observations). Validating the hardest case first is conservative and efficient.

### Kills with prosecution

**Q1.5 (don't name the primitive)** — killed because it violates the inquiry's deliverable. The user explicitly asked for naming; descriptive formalization is what's being requested. Seed: if future evidence shows naming creates more confusion than clarity (e.g., maintainers don't adopt the term), consider de-naming with cause analysis.

**Q2.5 (don't formalize the contract; let resume.md adapt to each discipline)** — killed because resume.md becomes complex and fragile when handling N idiosyncratic self-assessment formats. Uniform contract is simpler. Seed: if uniform contract proves to suppress useful per-discipline variation, consider per-discipline contracts as a refinement.

**Q3.2 (blanket retroactive — touch all 5 disciplines at once)** — killed because it violates phase-fit ("brushing teeth, not heavy machinery"). Seed: if a future event makes blanket-touch cheap (e.g., a corpus-wide tooling pass), revisit.

**Q1.3 (place Step Refinement spec inside `enes/discipline_taxonomy.md`)** — killed because the taxonomy file is for discipline categories (Core / Cross-cutting / Boundary / Situational), not corpus primitives. Concern-mixing. Seed: the taxonomy file IS a natural index point for cross-references — folded into A1 (DEFERRED) as the cross-reference cluster.

### Survives with reasons

**Q1.2 (`enes/step_refinement.md`) — SURVIVE.** Multi-mechanism convergent (Combination + Domain Transfer + Extrapolation). Single canonical home for the primitive + visual marker; respects placement convention; respects phase-fit.

**Q1.1 (glossary alternative) — SURVIVE (less preferred).** Multi-mechanism convergent. Lighter weight; trade-off is content-splitting.

**Q2.1+Q2.3+Q2.4 (`homegrown/contracts/discipline_output.md`) — REFINE→ACTIONABLE.** Critique added the canonical-prefix specification (`**Verdict:**`) and the resume.md backward-compat note. With those refinements, the contract is concrete and parseable.

**Q3.5→Q3.1+Q3.3 (pilot then incremental rollout) — REFINE→ACTIONABLE.** Critique specified sense-making as the pilot (rationale: hardest test for hedging-allowed format).

### Contradictions reconciled across exploration / sense-making / decomposition

The exploration found 8 candidate patterns; sense-making collapsed 6 of them into the two named patterns (with 2 deferred — load-bearing concept primitive #8 works informally; cross-discipline interaction placement #7 is N=1, premature). Decomposition validated that the two patterns are operationally independent at the artifact level even if they share a deeper meta-pattern. Innovation generated artifact proposals per piece without conflating them. Critique evaluated each independently. No contradictions emerged that required reconciliation across phases — the phase-by-phase outputs converged.

## Open Questions

### Monitoring

- After the pilot rollout on sense-making lands, does the verdict line work in practice — does an LLM running sense-making produce a parseable TYPE plus useful qualitative content in the descriptor? Validates the hedging-allowed format.
- After 30 days of `enes/step_refinement.md` and `homegrown/contracts/discipline_output.md` being in use without re-edit or complaint, the deferred A1 (cross-references in `enes/discipline_taxonomy.md`) becomes triggered. Monitor: did anything want to be re-edited? did contributors find the artifacts? did they adopt the visual marker for new bolted-on rules?
- After rollout to all 5 disciplines closes the verdict-line gap, does resume.md's "fall back to PROCEED" backward-compat become removable? Monitor whether any inquiry still produces non-conforming outputs.

### Blocked

- The deferred A1 (taxonomy cross-references) cannot ship until the new files have survived 30 days. This is intentional gating.
- Auto-generated audit table (Q1.4) is blocked until tooling exists. Not currently scheduled.

### Research Frontiers

- **Tooling for auto-generated audit / cross-reference maps.** A script that greps for the italic-prefix `*Refinement note:*` pattern across the corpus and emits the inverse failure-mode → preventing-rules map. Not currently buildable; would require either an explicit corpus-wide audit pass or a parser tool.
- **Fractal cognitive deliverable shape (exploration's pattern #6).** A structural observation that finding.md and discipline outputs share an implicit shape (Question → process → verdict → open questions). Not promoted to artifact in this inquiry because forcing the shape risks damaging discipline-specific structures (e.g., sense-making's SV-progression). Could become a frontier inquiry if the meta-spec cluster matures further.
- **The empirical execution-hugging claim** (carried forward from the prior inquiry). Whether bolted-on placements at canonical steps actually fire more reliably than sidebar-placed refinements is unverified. A future test harness could check this.

### Refinement Triggers

- **Format friction in non-pilot disciplines.** If, during incremental rollout to explore / decompose / comprehend / reflect, any discipline's existing self-assessment format causes friction with the hedging-allowed verdict format, refine the contract per-discipline (the contract allows hedging; per-discipline guidance can be added as a contract addendum).
- **Placement convention update.** If `enes/discipline_rule_placement.md` is updated independently of this finding (e.g., the deferred compression-discipline addendum from the prior inquiry lands), reopen Step Refinement's placement to verify consistency.
- **A 4th meta-spec primitive emerges.** If the corpus accretes a third class of "specifications about how disciplines are structured" beyond Step Refinement and Discipline Output Contract, the deferred A1 cross-reference cluster becomes more load-bearing. Revisit the deferral.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
we made many tiny additions to thinking disciplines, these additions were to prevent
certain failures. So maybe you can compare original versions of disciplines and how
they were changed and tell me if there is common pattern, a before undiscovered
dimension, paradigm, protocol regarding them?

one thing i can think of is, just like conclude protocol help creating finding.md,
maybe we need per discipline output protocol?

but this is just one idea, probably there are more solid ideas

in my understanding in development we need constant cleaning and refactors, like
brushing your teeth every morning. And this is what i want you to do. Inspect all
MVL+ relevant disciplines and tell me if our current structure is pregnant to
something new? or something new is already there but it is not named or it is not
tidied..
```

</details>
