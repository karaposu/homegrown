# Sensemaking: protocols_relevance_check

## User Input
devdocs/inquiries/protocols_relevance_check/_branch.md

Read _branch.md and exploration.md from the same folder. The exploration mapped the territory: 16 named protocols across 3 categories with confirmed status of each grounded in actual codebase. Anchor sensemaking on resolving the trichotomy (still relevant / superseded / missing piece) into a stable conceptual model the user can act on, paying attention to (a) /intuit Phase A as immediate next step (implicit deferral of protocol-building), (b) discipline_taxonomy.md's explicit exclusion of orchestration commands, (c) the relationship to the loop_design_1/2/3.md series just written this session.

---

## SV1 — Baseline Understanding

The protocols dimension exists in a half-state. Some named protocols are alive and absorbed into commands; some are gone (claimed implementations don't exist anymore); some are still genuinely missing. The right answer to "still relevant / superseded / missing piece" is probably some mixture rather than a clean verdict, and the work of sensemaking is to find what the mixture actually is.

(SV2 onward will reveal: the verdict isn't "mixture" — it's three distinct verdicts at three different levels of the question, each clean on its own.)

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- The protocols doc explicitly states "Status: Work in progress" — does not ask to be treated as canonical or finished spec.
- `enes/desc.md` identifies `/intuit` Phase A as the immediate next buildable step. Protocol-building is implicitly deferred for sequencing reasons.
- `enes/discipline_taxonomy.md` explicitly excludes orchestration commands (`/MVL`, `/MVL+`, `/inquiry`) from the 4-category discipline scheme. Orchestration is a recognized space; it just isn't formally taxonomized inside the discipline taxonomy. The protocols doc fills that gap with a different taxonomy (Pipeline / Transfer / Persistence).
- 6 missing protocols (SCOPE, BRANCH-as-formal-step, MERGE, HANDOFF, BRIEF, VERSION) map directly to specific autonomy-ladder capabilities in `enes/desc.md` — these aren't arbitrary gaps but architectural slots for stated long-term goals.
- 2 claimed implementations are GONE: metadata-injection hook (`hooks/devdocs_metadata_appender.sh`); freshness checks (in `CLAUDE.md` which doesn't exist). The doc's status table is stale on these.
- The protocols frame survived one round of refinement (Quality Protocols category was dissolved; GATE was eliminated). It has self-correction history.
- A predecessor exploration (`devdocs/exploration/protocols_as_second_dimension.md`) exists with the older framing; current `protocols/desc.md` is v2.

### Key Insights

- **Embedding ≠ superseding.** The 5 alive-and-absorbed protocols (CONFIGURE, STEER, TERMINATE, SYNTHESIZE, RESUME) being implemented inside commands doesn't supersede the protocols frame — it validates the frame's predictions. A protocol that's alive across multiple commands (RESUME is in all 3 loop runners) is more, not less, validated as a generic operational concern.
- **The 6 missing protocols are load-bearing, not speculative.** Each maps 1:1 to an autonomy-ladder requirement: BRANCH+MERGE → parallel MVL loops (Open Question #4 in enes/desc.md); HANDOFF+BRIEF → cross-agent autonomy at Level 3+; VERSION → Baldwin cycle calibration; SCOPE → autonomy-level-aware effort calibration.
- **Loop_design_N.md and protocols/desc.md are complementary, not redundant.** Loop_design is runner-first ("what does THIS runner do across these design dimensions?"). Protocols-doc is concept-first ("what operational concerns exist generally, with what status across the codebase?"). Same machinery, different access paths.
- **The doc's stale spots are surface drift, not structural unsoundness.** The conceptual core (definition; "disciplines judge, protocols route"; the two-dimensions frame; the 4 categories with one dissolved) remains accurate. Only the per-protocol status table is wrong in 3 specific places.
- **The doc-vs-spec distinction matters.** The protocols doc is a MAP of the operational landscape, not a SPEC. A map can become out of date in specific entries while remaining structurally useful.

### Structural Points

- 4 categories declared (Pipeline / Transfer / Persistence / Quality-dissolved), 3 categories active.
- 16 named protocols across the active 3 categories.
- Per-protocol status (corrected from exploration): 5 alive-absorbed + 3 alive-partial + 2 gone + 6 missing-and-needed = 16.
- Three distinct levels at which the question can be asked:
  - **L1 — The DOC:** should `thinking_disciplines/protocols/desc.md` be kept, updated, or archived?
  - **L2 — The DIMENSION:** is "protocols as a second dimension alongside thinking disciplines" still a useful architectural framing?
  - **L3 — The NAMED PROTOCOLS:** for each of the 16, what's its current status and what should happen to it?
- The doc's relationship to other architecture docs:
  - References `discipline_taxonomy.md` and the disciplines-vs-protocols boundary (sound).
  - Does NOT reference loop_design_N.md (those didn't exist when the doc was written).
  - Does NOT cross-reference enes/desc.md's autonomy ladder (a missing connection that would make the doc more obviously load-bearing).

### Foundational Principles

- **"Disciplines judge. Protocols route."** (from the doc itself) — the structural boundary that justifies the protocols dimension's existence and explains the GATE dissolution.
- **"A protocol is a formalized operational procedure with defined steps and failure modes."** — distinguishes protocols from conventions (static), tools (implementations), commands (UIs), and checklists (no decision logic).
- **The Baldwin cycle requires spec encoding** (per enes/desc.md). Spec encoding requires that iteration N's spec be comparable to iteration N+1's — which requires VERSION protocol to exist. This is the principled reason VERSION is near-term load-bearing rather than Level 3+ deferred.
- **Self-improvement rate is the primary measured objective** (per enes/desc.md). Self-improvement is mediated by protocols that route the system from one improvement cycle to the next. Without protocols, self-improvement is unmediated — it has no operational substrate.
- **The discipline_taxonomy explicitly leaves orchestration outside its 4 categories** (line 198: "meta-orchestration is real work; disciplines coordinating themselves creates distributed complexity"). This creates space for a separate orchestration-layer taxonomy, which is exactly what the protocols dimension provides.

### Meaning-Nodes

- **Protocols dimension** — the abstract framing; the architectural decision that operational concerns deserve their own taxonomy parallel to (not inside) the discipline taxonomy.
- **Protocol** — a single named operational procedure (e.g., RESUME, SYNTHESIZE).
- **Embedded vs missing vs gone** — the three states a named protocol can be in (further split: alive-absorbed, alive-partial, alive-generalized).
- **Stale vs structurally sound** — orthogonal axes for evaluating the doc; the doc is partly stale (status table) but structurally sound (concept, categories, boundary).
- **Doc as map vs doc as spec** — different evaluation criteria apply.

---

## SV2 — Anchor-Informed Understanding

The trichotomy (still relevant / superseded / missing piece) collapses into three different verdicts at three different levels of the question. The DOC has one verdict; the DIMENSION has another; the NAMED PROTOCOLS have 16 verdicts (one per protocol). The answer is not a single point on the trichotomy but a structured stack: each level gets its own verdict, and the verdicts compose.

The protocols dimension is conceptually sound and load-bearing for the project's stated long-term goal. The doc is partially stale (status table needs ~3 corrections) but structurally useful. The 6 missing protocols are real architectural gaps that map to specific autonomy-ladder capabilities — they aren't arbitrary, but they aren't all "build now" either; their construction sequences with the autonomy ladder.

---

## Phase 2 — Perspective Checking

### Technical / Logical

The protocols framework is **generative**: knowing "BRANCH protocol is missing" predicts what to look for (steps for creating parallel branches; completion test for "all branches initialized"; failure modes like hidden coupling between branches). The 5 alive protocols match the framework's predictions in shape. The framework is therefore not just a labeling scheme — it produces actionable specifications when applied to gaps.

A counter: maybe the framework only "predicts" because the 5 alive protocols were defined backward from existing implementations. But the cross-domain check (Agile, Science, Law all have content × procedural dimensions) provides external grounding — the frame matches structures that emerged independently in other practices. That's stronger than internal-consistency.

### Human / User

A reader landing on `protocols/desc.md` today gets ~80% accurate map of the operational landscape with 3 stale spots that mislead them about specific implementations. The doc is more useful than misleading, but the stale spots create real friction (e.g., "I'll use the metadata-injection hook" → discovers the hook doesn't exist).

The user asked the question because of architectural-doc maintenance triage — they're looking at architectural docs in this session and deciding what to keep / update / archive (this same session has already produced verdicts on `inquiry_as_a_loop.md` → became `loop_design_1.md`; on `system_quality_assestment.md` → deleted; etc.). The protocols question is part of a pattern of audit-and-prune.

### Strategic / Long-term

`enes/desc.md` is the project's stated long-term goal. The end-goal involves Level 3+ autonomy with parallel MVL loops, year-long autonomous tasks, and cross-agent handoff. Each of the 6 missing protocols maps to a specific Level-3+ capability:

| Missing Protocol | Maps to (enes/desc.md) |
|---|---|
| BRANCH | Open Question #4 ("Parallel MVL loops + cross-comparison") |
| MERGE | Open Question #4 (combining results from parallel branches) |
| HANDOFF | Level 3+ autonomy ("Reviews only uncertain self-modifications" → cross-agent capable) |
| BRIEF | Level 3+ autonomy (cold-start a working agent on existing inquiry) |
| VERSION | Baldwin cycle requires comparing iteration N to N+1 ("Predictive RC predictions at T0, calibrated against Retrospective RC empirical outcomes at T2+") |
| SCOPE | Effort calibration as autonomy increases (Level 0 task vs Level 3 task need different depth/budget) |

The protocols dimension is therefore **load-bearing for the project's stated end-goal**, not optional architectural decoration.

But: the immediate next step per `enes/desc.md` is `/intuit` Phase A. Most of the missing protocols correspond to capabilities downstream of `/intuit` maturity. So protocol-building sequences with the autonomy ladder rather than blocking it.

VERSION is the candidate that may need earlier attention: the Baldwin cycle (which `/intuit` Phase A produces calibration data for) needs iteration-history comparison. Without VERSION, /MVL/MVL+'s overwriting iteration-N's outputs with iteration-N+1's destroys the comparison surface that calibration depends on. This makes VERSION potentially near-term, not Level 3+.

### Risk / Failure

- **Risk of deleting the protocols doc:** lose the named-vocabulary that makes future architectural conversations possible. "We need a HANDOFF protocol" is a specific, debatable architectural request; "we need some way to transfer context" is a vague wish. The vocabulary is itself architectural infrastructure.
- **Risk of keeping as-is:** stale claims accumulate. Each pass through the doc that doesn't update it normalizes the drift. The 2 GONE entries (metadata hook, /devdocs-archivist) are mild misleads today; they'll mislead more readers over time.
- **Risk of building all 6 missing protocols now:** violates `enes/desc.md` sequencing; spreads effort across protocols that may turn out unnecessary (like GATE was) or may need different shapes once their dependent capabilities exist.
- **Risk of treating loop_design_N.md as a replacement for protocols/desc.md:** loses the cross-runner concept-first view. Loop_design covers what each runner does; protocols-doc covers what operational concerns exist that may be in or outside any specific runner. A reader investigating "is there a way to handoff context?" is poorly served by loop_design (which is per-runner) but well-served by protocols-doc (which has a HANDOFF entry — currently labeled missing).

### Resource / Feasibility

- Updating the doc's stale entries: ~30 lines of edits. ≤30 minutes.
- Adding cross-references to loop_design_N.md and `enes/desc.md` autonomy ladder: ~1 paragraph each. ≤30 minutes.
- Designing one missing protocol (say VERSION): a few hours of design + spec write + integration into /MVL & /MVL+ iteration handling.
- Designing all 6 missing protocols: months. Not appropriate now per sequencing.

### Definitional / Consistency

The doc's own definition: "A protocol is a formalized operational procedure with defined steps and failure modes — that routes, configures, sequences, transfers, or persists the outputs and state of thinking disciplines."

Internal consistency check on the definition:
- Does every named protocol fit? CONFIGURE configures; STEER routes; TERMINATE configures-completion; SYNTHESIZE transfers; RESUME persists; folder convention persists; CV persistence persists; archival persists. Yes — every named protocol fits.
- Does the definition contradict its own components? No — "formalized" + "defined steps" + "failure modes" all bind together.
- Does the definition's stated purpose align with its mechanisms? Yes — the mechanisms (steps, completion test, failure modes) deliver on the purpose (routing, sequencing, transferring, persisting).

External-anchor check: does the definition contradict any stronger anchor in the project?
- Discipline taxonomy says orchestration is excluded from the 4 categories. The protocols dimension claims orchestration is its own dimension. NOT contradiction — complementary positions: discipline taxonomy says "we don't taxonomize orchestration here"; protocols dimension says "here's a different taxonomy for orchestration." The two coexist.
- "S→I→C is the only primitive" (`/MVL` claim) vs protocols dimension. NOT contradiction — `/MVL`'s claim is about cognitive primitives (the SIC loop is the primitive cognitive operation). Protocols are operational, not cognitive. Different dimension.

The definition holds.

### Meta-perspective: the most uncomfortable angle

The most uncomfortable angle is: maybe the protocols dimension is over-engineering for current scale. The project has 3 loop runners + ~10 disciplines + a few hooks. At this scale, embedded-in-commands handles all the operational concerns adequately; a separate dimension is bureaucratic overhead.

This is partially true *for current scale* but ignores the autonomy-ladder trajectory. At Level 3+ (parallel MVL loops, cross-agent handoff, year-long inquiries), embedded-in-commands cannot scale — the operational concerns become too entangled with too many runners. The protocols dimension is the architectural prep work for that transition. Keeping the dimension named and partially specified now makes Level 3+ implementation cheaper later.

So the over-engineering objection is correct *in the short term* and wrong *in the long term*. Which is exactly the trade-off `enes/desc.md` makes elsewhere — bootstrap from human, prepare for emancipation.

---

## SV3 — Multi-Perspective Understanding

The protocols dimension survives every perspective check. Technically it's generative (predicts shapes for missing protocols). User-side it's mostly useful with localized stale spots. Strategically it's load-bearing for stated end-goal. Risk-wise the cost of keeping is small and the cost of losing is the named-vocabulary infrastructure. Resource-wise updates are cheap. Definitionally it's internally consistent and externally non-conflicting.

The most uncomfortable perspective (over-engineering for current scale) reveals a real trade-off but not a fatal one — protocols are architectural prep for the autonomy-ladder progression, deferred-but-named, which is exactly the right shape for capabilities that will be needed later.

The verdict is taking shape: **L1 = update; L2 = keep; L3 = per-protocol triage with autonomy-ladder sequencing.**

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: What does "still relevant" mean — the doc, the dimension, or the named protocols?

**Counter-interpretation:** The user's phrasing suggests they're asking only about the file (`thinking_disciplines/protocols/desc.md`) — file-level question, file-level answer.

**Why this counter is partially right:** The user did say "read protocols/desc.md and investigate" — the file is the explicit object.

**Why this counter doesn't fully win:** The user also said "or they are superseded? maybe they are still missing piece for our goal?" The pronoun "they" plural-references protocols-as-concept; "still missing piece for our goal" reaches beyond the file into architectural completeness. The full question covers all three levels (doc, dimension, named protocols).

**Resolution:** The audit answers all three.

| Level | Verdict |
|---|---|
| L1 (the doc `thinking_disciplines/protocols/desc.md`) | Keep with updates. The conceptual core is sound; stale entries need correction. |
| L2 (the protocols dimension as architectural concept) | Still relevant. Validated by 5 alive-absorbed protocols, cross-domain analogy, internal consistency check, and 1:1 mapping of 6 missing protocols to autonomy-ladder requirements. |
| L3 (the 16 named protocols) | Per-protocol triage with sequencing. 5 alive-absorbed stay alive in commands; 3 alive-partial stay where they are; 2 gone get removed from the status table; 6 missing get build-priority annotations matched to autonomy-ladder timing. |

**What is now fixed:** The question has three levels with three verdicts; conflating them produces wrong answers.

**What is no longer allowed:** Single-verdict answers that pick one of (still relevant / superseded / missing piece) for all three levels simultaneously.

**What now depends on this choice:** The finding will articulate the three verdicts separately rather than as one stack-level answer.

**What changed:** SV2's "stack of verdicts" was the right intuition; the ambiguity-collapse confirms it as the irreversible structural commitment.

**Confidence:** HIGH. Three levels are structurally distinct (different objects: a file, a concept, a list of named items) and admit different verdicts on the same evidence.

### Ambiguity 2: When should the 6 missing protocols be built?

**Counter-interpretation A:** Now, because they're load-bearing for stated long-term goals.

**Counter-interpretation B:** Deferred indefinitely, because `/intuit` Phase A is the immediate next step.

**Why neither fully wins:** The protocols are load-bearing for Level 3+ autonomy. The current state is Level 0–1. Most missing protocols correspond to Level 2-3 capabilities and don't need to exist before those capabilities are built. But VERSION is an exception — it enables the Baldwin cycle that `/intuit` Phase A's calibration depends on.

**Resolution:** Build protocols when they unblock specific capabilities, not before and not after. The 6 missing protocols sequence as:

| Protocol | Unblocks | Build trigger |
|---|---|---|
| **VERSION** | Baldwin cycle calibration (compare iteration N predictions to N+1 outcomes) | Near-term — when /intuit Phase A starts producing iteration-comparable invocation traces. Could be soon. |
| **SCOPE** | Autonomy-level-aware effort calibration | Mid-term — when autonomy ladder reaches Level 2 (system handles uncertain reviews itself) |
| **BRANCH** | Parallel MVL loops with different sub-pipelines | Mid-to-long-term — when parallel MVL loops capability is being designed (Open Question #4) |
| **MERGE** | Combining results from parallel branches | Same as BRANCH (depends on it) |
| **HANDOFF** | Cross-agent context transfer | Long-term — when Level 3+ autonomy needs cross-session/cross-agent work |
| **BRIEF** | Cold-start an agent on existing inquiry | Same as HANDOFF (different shape, same trigger) |

**What is now fixed:** Sequencing is by capability-trigger, not by calendar.

**What is no longer allowed:** "Build all 6 now" treatment; "defer all 6 indefinitely" treatment.

**What now depends on this choice:** The next-actions list will name VERSION as the only near-term candidate; the other 5 get DEFERRED with named triggers.

**Confidence:** MEDIUM-HIGH on VERSION being near-term (depends on /intuit Phase A's actual production rate). HIGH on the other 5 being deferred until their capability triggers fire.

### Ambiguity 3: Is loop_design_N.md a replacement for protocols/desc.md?

**Counter-interpretation:** The loop_design series (1, 2, 3) just written this session covers loop runners in detail; protocols/desc.md covers similar territory at the named-protocol level. One should replace the other.

**Why this counter is partially right:** The two docs do cover overlapping ground (e.g., SYNTHESIZE in protocols-doc is the same operational concern as the synthesis dimension in loop_design_1; STEER in protocols-doc is the same as the steering-component dimension; RESUME is in both).

**Why this counter doesn't fully win:** The two docs have orthogonal access patterns:
- loop_design_N.md: runner-first. "What does THIS runner do across these 8 design dimensions?" Optimal for: "I'm using /MVL+, what choices does it embed?"
- protocols/desc.md: concept-first. "What operational concerns exist generally, named and categorized, with status across all commands?" Optimal for: "Is there a way to handoff context?"

A reader in the runner-first mode is poorly served by jumping into a concept-first doc; a reader in the concept-first mode is poorly served by reading 3 runner-specific docs. They are complementary, not redundant.

**Resolution:** Keep both. Cross-reference them — protocols/desc.md gains a brief mention "see also loop_design_N.md for runner-by-runner choices on each operational dimension."

**What is now fixed:** The two docs serve different access patterns and both stay.

**What is no longer allowed:** Treating loop_design_N.md as a replacement; treating protocols/desc.md as redundant given loop_design exists.

**Confidence:** HIGH.

### Ambiguity 4: Is the protocols dimension over-engineering for current scale?

**Counter-interpretation:** At 3 runners + ~10 disciplines, embedded-in-commands handles all operational concerns; a separate dimension is bureaucratic overhead.

**Why partially right:** Right now, every alive protocol is embedded in a command. The dimension's "separate categorization" doesn't actively gate any current work.

**Why doesn't fully win:** The dimension is architectural prep for autonomy-ladder progression. At Level 3+ (parallel runs, cross-agent, year-long), embedded-in-commands cannot scale — concerns become entangled across runners. The dimension is named-and-deferred infrastructure for that transition. The cost of carrying the named-vocabulary now is low (one doc, occasional updates); the cost of NOT having it when Level 3+ arrives is high (no shared vocabulary for the architectural conversation).

This matches `enes/desc.md`'s general pattern: bootstrap from human, prepare for emancipation. Protocols are operational prep for emancipation.

**Resolution:** The dimension is appropriate-engineering for the project's stated trajectory, even though it's slightly over-engineering for current snapshot scale.

**Confidence:** HIGH on the trajectory argument. MEDIUM on whether the user wants to accept "carrying named-but-deferred infrastructure" as appropriate engineering — that's a judgment call about how aggressively to invest in long-term architecture.

---

## SV4 — Clarified Understanding

The protocols dimension's role is now clear:
- It's a MAP (named operational concerns + status across the codebase), not a SPEC.
- It's load-bearing for the stated long-term goal even though most of its named protocols won't be built soon.
- Its conceptual core is sound; only specific status entries are stale.
- It's complementary to (not replaced by) loop_design_N.md.
- Its 6 missing protocols are architectural slots tied to specific autonomy-ladder capabilities.
- Its construction-priority is gated by capability triggers, not by calendar.

What's now no longer viable:
- Treating the doc as either fully alive-and-canonical or fully dead-and-archivable.
- Single-verdict answers ("still relevant" or "superseded" or "missing piece" alone).
- Building all 6 missing protocols now, OR deferring all 6 indefinitely.
- Treating loop_design_N.md as a replacement.
- Dismissing the dimension as over-engineering without recognizing the trajectory argument.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Variables now fixed

- **The DOC** (`thinking_disciplines/protocols/desc.md`) gets UPDATE + cross-references, not delete and not archive.
- **The DIMENSION** stays as architectural concept; it occupies the orchestration space the discipline taxonomy explicitly excludes from its 4 categories.
- **The 16 named protocols** get triaged: 5 alive-absorbed (no action), 3 alive-partial (no action, possibly note location), 2 gone (remove from status table), 6 missing (annotate with capability trigger).
- **VERSION is the only near-term candidate** among the missing six. The other 5 are DEFERRED with explicit triggers.
- **Loop_design_N.md and protocols/desc.md coexist** with cross-references.

### Options eliminated

- Delete the doc (loses named-vocabulary; eliminates structurally sound architectural map).
- Archive without lifting (no need — the doc is not a discontinued draft; it's a partly-stale living map).
- Build all 6 missing protocols immediately (violates sequencing).
- Defer all 6 indefinitely (loses VERSION's near-term value for the Baldwin cycle).
- Treat loop_design as superseding protocols-doc (different access patterns; both needed).
- Dismiss the protocols dimension as bureaucratic overhead (ignores the trajectory).

### Paths remaining

For the doc:
- (A) **Minimal update** — fix only the 3 stale status entries. ~10 lines. Cheap.
- (B) **Substantive update** — fix stale entries + add cross-references to loop_design_N.md + add a section connecting protocols to the autonomy ladder in enes/desc.md. ~1-2 hours.

For VERSION:
- (V1) **Defer until /intuit Phase A produces its first iteration of invocation traces**, then design VERSION around the actual calibration-comparison need.
- (V2) **Design VERSION speculatively now**, before /intuit Phase A produces concrete requirements. (Risk of building wrong shape.)

For the other 5 missing protocols:
- DEFERRED with capability triggers (no immediate action).

---

## SV5 — Constrained Understanding

The solution space has narrowed to:
- DOC verdict: between (A) minimal update and (B) substantive update. Both are acceptable; choice depends on user preference for one-shot vs incremental architecture investment.
- VERSION verdict: between (V1) wait-and-design vs (V2) design-speculatively. (V1) is safer; (V2) is faster but risks designing the wrong shape.
- Other 5 missing protocols: DEFERRED with named triggers.
- Doc-pair relationship: cross-reference, both stay.
- Dimension status: KEEP.

The remaining decisions are about effort allocation, not about the architectural verdict itself.

---

## Phase 5 — Conceptual Stabilization

### SV6 — Stabilized Model

**The protocols dimension is a partially-stale but conceptually-sound architectural map of the project's operational concerns. It is still relevant, has a small set of corrections needed, and identifies real load-bearing missing pieces — none of which should be built now, except possibly VERSION.**

The verdict has three parts at three structural levels:

#### L1 — The DOC: Keep with updates (UPDATE verdict)

`thinking_disciplines/protocols/desc.md` has three stale spots in its per-protocol status table:
1. Metadata-injection hook (`hooks/devdocs_metadata_appender.sh`) — claimed implemented but the hook is gone (removed earlier this session). Status should change from "Exists and functional" to "Removed."
2. `/devdocs-archivist` command — claimed exists; not in `commands/`. Status should change from "Exists" to "Removed; archival is now embedded in /MVL & /MVL+ termination."
3. RESUME — claimed "Currently lives inside `/inquiry`"; reality is RESUME is in all 3 loop runners. Should generalize the claim.
4. Folder convention — claimed in `devdocs/folder_based.md`, "not battle-tested." Reality: at `enes/runtime_environment/folder_based.md`, in active daily use. Update path; remove battle-tested claim.

Beyond stale-entry fixes, two cross-references would strengthen the doc:
- A pointer to the `loop_design_N.md` series (`enes/loop_desing_ideas/`) for runner-by-runner choices on each operational dimension.
- A section connecting the 6 missing protocols to specific autonomy-ladder capabilities in `enes/desc.md`.

The doc's conceptual core (definition, "disciplines judge / protocols route" boundary, the two-dimensions framing, the 4-category-with-Quality-dissolved structure) remains accurate and load-bearing. The doc serves as the named-vocabulary index for future architectural conversations.

#### L2 — The DIMENSION: Keep (STILL RELEVANT verdict)

The protocols dimension survives every structural test:
- Internally consistent (definition matches contents; categories don't overlap with disciplines; GATE dissolution proves the frame self-corrects).
- Externally validated (cross-domain check: Agile/Science/Law all have content × procedural; the discipline taxonomy explicitly leaves orchestration space open for exactly this kind of separate taxonomy).
- Generative (predicts the shape of missing protocols; the predictions match the shapes the autonomy ladder needs).
- Empirically supported (5 protocols are alive in commands with the structure the framework predicts).

The dimension is appropriate-engineering for the project's stated trajectory — slight over-engineering at current scale, prep for the autonomy ladder's Level 3+ where embedded-in-commands cannot scale.

#### L3 — The NAMED PROTOCOLS: 16 verdicts in three groups

**Group 1 — Alive-absorbed (5 protocols, no action needed):**
- CONFIGURE (in `/inquiry`)
- STEER (in `/inquiry`)
- TERMINATE (in all 3 runners)
- SYNTHESIZE (in `/inquiry` + as finding-template in `/MVL` & `/MVL+`)
- RESUME (in all 3 runners)

**Group 2 — Alive-partial / alive-generalized (3 protocols, location notes):**
- BRANCH (design rationale in `folder_based.md`; not a formal step in any runner)
- Folder convention (in `enes/runtime_environment/folder_based.md`; battle-tested in active inquiry use)
- Archival (embedded in `/MVL` & `/MVL+` termination; standalone command gone)

**Group 3 — Gone (2 protocols, status table needs correction):**
- Metadata injection — hook removed earlier this session. No replacement currently planned.
- Freshness checks (via CLAUDE.md) — CLAUDE.md doesn't exist. Whether this protocol is truly "gone" or "moved to a future implementation" is open.

**Group 4 — Missing (6 protocols, with build triggers):**

| Protocol | Unblocks | Build trigger |
|---|---|---|
| **VERSION** | Baldwin cycle calibration | Near-term — when /intuit Phase A starts producing iteration-comparable traces |
| **SCOPE** | Autonomy-level-aware effort calibration | Mid-term — Level 2 autonomy capability |
| **BRANCH (formal step)** | Parallel MVL loops | Mid-long — Open Question #4 (parallel-loops design) |
| **MERGE** | Combining parallel-branch outputs | Depends on BRANCH |
| **HANDOFF** | Cross-agent context transfer | Long — Level 3+ autonomy |
| **BRIEF** | Cold-start an agent | Same trigger as HANDOFF |

### How SV6 differs from SV1

SV1 was vague: "probably some mixture rather than clean verdict; sensemaking finds what the mixture is."

SV6 is structured:
- The trichotomy (still relevant / superseded / missing piece) decomposes into three independent verdicts at three structural levels (doc / dimension / named protocols), each clean on its own.
- The doc gets UPDATE; the dimension is STILL RELEVANT; the named protocols get per-protocol triage with autonomy-ladder-aligned build triggers.
- Loop_design_N.md is identified as complementary, not redundant — both stay with cross-references.
- VERSION is the only near-term build candidate among the missing six; the others are deferred with named capability triggers, not blanket-deferred.
- The "over-engineering for current scale" objection is acknowledged and reconciled: appropriate-engineering for the stated trajectory.

---

## Saturation Indicators (Telemetry)

- **Perspective saturation:** 7 perspectives produced new types of anchors. The most uncomfortable perspective (over-engineering for current scale) revealed the trajectory argument; that's the most load-bearing surface this audit produced.
- **Ambiguity resolution:** 4 of 4 ambiguities resolved. Ambiguity #1 (level of question) → HIGH confidence three-level decomposition. Ambiguity #2 (when to build missing) → MEDIUM-HIGH on per-protocol sequencing. Ambiguity #3 (loop_design as replacement) → HIGH on complementarity. Ambiguity #4 (over-engineering) → HIGH on trajectory reconciliation.
- **SV delta:** Significant. SV1 expected a fuzzy mixture; SV6 produced three clean verdicts at three levels with sequencing logic for the missing six. Not superficial.
- **Anchor diversity:** Constraints, key insights, structural points, foundational principles, meaning-nodes — all five types produced. Anchors came from the doc itself, the codebase reality (exploration), enes/desc.md, the loop_design series, the discipline taxonomy, and cross-domain analogy. Diverse.

## Failure-mode self-check

- **Status quo bias?** No — the audit was willing to remove (2 stale entries) and was willing to consider deletion of the doc; chose update on structural grounds, not because the doc is documented.
- **Premature stabilization?** No — the three-level decomposition emerged at SV3 and held through ambiguity collapse, but with the trajectory argument added through perspective checking.
- **Anchor dominance?** No — the conclusion rests on multiple independent anchors (the 5 alive protocols' shape match; the 6 missing protocols' autonomy-ladder mapping; cross-domain analogy; GATE dissolution as self-correction history).
- **Perspective blindness?** Tested over-engineering objection explicitly; resolved through trajectory argument.
- **Clean resolution trap?** The VERSION-as-near-term call is MEDIUM-HIGH confidence specifically because it depends on /intuit Phase A's actual production rate, which isn't yet known. Not over-confident; flagged the conditional.
- **Self-reference blindness?** The protocols dimension is being evaluated using the project's own thinking disciplines (sensemaking is a discipline; this audit is a SIC loop). External grounding came from cross-domain analogy (Agile/Science/Law) and from concrete codebase reality (the exploration). Not purely self-referential.
